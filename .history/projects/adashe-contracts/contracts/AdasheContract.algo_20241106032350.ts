import algosdk from "algosdk";

const MIN_CONTRIBUTION = "min_contribution";
const CONTRIBUTION_CYCLE = "contribution_cycle";
const PAYOUT_CYCLE = "payout_cycle";
const MEMBERS_PER_PAYOUT = "members_per_payout";
const MAX_MEMBERS = "max_members";
const EMERGENCY_FUND_PERCENT = "emergency_fund_percent";
const EMERGENCY_FUND = "emergency_fund";
const CURRENT_CYCLE = "current_cycle";
const MEMBER_COUNT = "member_count";
const NEXT_PAYOUT_INDEX = "next_payout_index";

export class AdashePayContract {
    algodClient: algosdk.Algodv2;
    adminAddress: string;

    constructor(algodClient: algosdk.Algodv2, adminAddress: string) {
        this.algodClient = algodClient;
        this.adminAddress = adminAddress;
    }

    async compileProgram(sourceCode: string): Promise<Uint8Array> {
        const compiledProgram = await this.algodClient.compile(sourceCode).do();
        return new Uint8Array(Buffer.from(compiledProgram.result, "base64"));
    }

    async createApp(
        approvalProgram: Uint8Array,
        clearProgram: Uint8Array,
        appArgs: Uint8Array[]
    ): Promise<number> {
        const params = await this.algodClient.getTransactionParams().do();

        const onComplete = algosdk.OnApplicationComplete.NoOpOC;

        const appCreateTxn = algosdk.makeApplicationCreateTxnFromObject({
            from: this.adminAddress,
            approvalProgram,
            clearProgram,
            numLocalInts: 4, // Adjust according to state schema
            numLocalByteSlices: 4,
            numGlobalInts: 10, // Adjust according to state schema
            numGlobalByteSlices: 2,
            appArgs,
            suggestedParams: params,
            onComplete,
        });

        const signedTxn = appCreateTxn.signTxn(this.adminAddress);
        const txResponse = await this.algodClient.sendRawTransaction(signedTxn).do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn["application-index"];
    }

    async joinGroup(appId: number): Promise<string> {
        // Join (Opt-In) to the app with an initial state setup
        const params = await this.algodClient.getTransactionParams().do();
        const optInTxn = algosdk.makeApplicationOptInTxn(this.adminAddress, params, appId);
        const signedTxn = optInTxn.signTxn(this.adminAddress);
        const txResponse = await this.algodClient.sendRawTransaction(signedTxn).do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn.txId;
    }

    async contribute(appId: number, amount: number): Promise<string> {
        // Contribution transaction to the app
        const params = await this.algodClient.getTransactionParams().do();
        const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: this.adminAddress,
            to: algosdk.getApplicationAddress(appId),
            amount,
            suggestedParams: params,
        });

        const appCallTxn = algosdk.makeApplicationNoOpTxn(this.adminAddress, params, appId, [
            new Uint8Array(Buffer.from("contribute")),
        ]);

        const groupTxns = algosdk.assignGroupID([paymentTxn, appCallTxn]);
        const signedPaymentTxn = paymentTxn.signTxn(this.adminAddress);
        const signedAppCallTxn = appCallTxn.signTxn(this.adminAddress);

        const txResponse = await this.algodClient
            .sendRawTransaction([signedPaymentTxn, signedAppCallTxn])
            .do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn.txId;
    }

    async payout(appId: number): Promise<string> {
        // Admin-initiated payout transaction
        const params = await this.algodClient.getTransactionParams().do();
        const appCallTxn = algosdk.makeApplicationNoOpTxn(this.adminAddress, params, appId, [
            new Uint8Array(Buffer.from("payout")),
        ]);

        const signedTxn = appCallTxn.signTxn(this.adminAddress);
        const txResponse = await this.algodClient.sendRawTransaction(signedTxn).do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn.txId;
    }

    async claimPayout(appId: number): Promise<string> {
        // Member-initiated claim payout transaction
        const params = await this.algodClient.getTransactionParams().do();
        const appCallTxn = algosdk.makeApplicationNoOpTxn(this.adminAddress, params, appId, [
            new Uint8Array(Buffer.from("claim_payout")),
        ]);

        const signedTxn = appCallTxn.signTxn(this.adminAddress);
        const txResponse = await this.algodClient.sendRawTransaction(signedTxn).do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn.txId;
    }

    async resetContribution(appId: number): Promise<string> {
        // Resets the contribution state for the next cycle
        const params = await this.algodClient.getTransactionParams().do();
        const appCallTxn = algosdk.makeApplicationNoOpTxn(this.adminAddress, params, appId, [
            new Uint8Array(Buffer.from("reset_contribution")),
        ]);

        const signedTxn = appCallTxn.signTxn(this.adminAddress);
        const txResponse = await this.algodClient.sendRawTransaction(signedTxn).do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn.txId;
    }

    async deleteApp(appId: number): Promise<string> {
        // Delete the app, only callable by admin
        const params = await this.algodClient.getTransactionParams().do();
        const deleteTxn = algosdk.makeApplicationDeleteTxn(this.adminAddress, params, appId);

        const signedTxn = deleteTxn.signTxn(this.adminAddress);
        const txResponse = await this.algodClient.sendRawTransaction(signedTxn).do();

        const confirmedTxn = await this.waitForConfirmation(txResponse.txId);
        return confirmedTxn.txId;
    }

    async waitForConfirmation(txId: string): Promise<any> {
        // Helper function to wait for transaction confirmation
        const status = await this.algodClient.status().do();
        let lastRound = status["last-round"];
        while (true) {
            const pendingInfo = await this.algodClient
                .pendingTransactionInformation(txId)
                .do();
            if (
                pendingInfo["confirmed-round"] !== null &&
                pendingInfo["confirmed-round"] > 0
            ) {
                return pendingInfo;
            }
            lastRound += 1;
            await this.algodClient.statusAfterBlock(lastRound).do();
        }
    }
}
