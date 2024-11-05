/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "doMath(uint64,uint64,string)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "hello(string)string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCmludGNibG9jayAxCmJ5dGVjYmxvY2sgMHgxNTFmN2M3NQoKLy8gVGhpcyBURUFMIHdhcyBnZW5lcmF0ZWQgYnkgVEVBTFNjcmlwdCB2MC4xMDUuNQovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGUgY29udHJhY3QsIGl0cyByZXNwZWN0aXZlIGJyYW5jaCB3aWxsIGJlICIqTk9UX0lNUExFTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECiEKcHVzaGludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJLy8gVGhlIHJlcXVlc3RlZCBhY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoaXMgY29udHJhY3QuIEFyZSB5b3UgdXNpbmcgdGhlIGNvcnJlY3QgT25Db21wbGV0ZT8gRGlkIHlvdSBzZXQgeW91ciBhcHAgSUQ/CgllcnIKCi8vIGdldFN1bShhOiB1aW50NjQsIGI6IHVpbnQ2NCk6IHVpbnQ2NAovLwovLyBDYWxjdWxhdGVzIHRoZSBzdW0gb2YgdHdvIG51bWJlcnMKLy8KLy8gQHBhcmFtIGEKLy8gQHBhcmFtIGIKLy8gQHJldHVybnMgVGhlIHN1bSBvZiBhIGFuZCBiCmdldFN1bToKCXByb3RvIDIgMQoKCS8vIGNvbnRyYWN0cy9BZGFzaGVDb250cmFjdC5hbGdvLnRzOjEyCgkvLyByZXR1cm4gYSArIGI7CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0CgkrCglyZXRzdWIKCi8vIGdldERpZmZlcmVuY2UoYTogdWludDY0LCBiOiB1aW50NjQpOiB1aW50NjQKLy8KLy8gQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBudW1iZXJzCi8vCi8vIEBwYXJhbSBhCi8vIEBwYXJhbSBiCi8vIEByZXR1cm5zIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBhbmQgYi4KZ2V0RGlmZmVyZW5jZToKCXByb3RvIDIgMQoKCS8vIGNvbnRyYWN0cy9BZGFzaGVDb250cmFjdC5hbGdvLnRzOjIzCgkvLyByZXR1cm4gYSA+PSBiID8gYSAtIGIgOiBiIC0gYTsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjQKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50NjQKCT49CglieiAqdGVybmFyeTBfZmFsc2UKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjQKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50NjQKCS0KCWIgKnRlcm5hcnkwX2VuZAoKKnRlcm5hcnkwX2ZhbHNlOgoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQ2NAoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJLQoKKnRlcm5hcnkwX2VuZDoKCXJldHN1YgoKLy8gZG9NYXRoKHVpbnQ2NCx1aW50NjQsc3RyaW5nKXVpbnQ2NAoqYWJpX3JvdXRlX2RvTWF0aDoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZWMgMCAvLyAweDE1MWY3Yzc1CgoJLy8gb3BlcmF0aW9uOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWV4dHJhY3QgMiAwCgoJLy8gYjogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgoJLy8gYTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBkb01hdGgodWludDY0LHVpbnQ2NCxzdHJpbmcpdWludDY0CgljYWxsc3ViIGRvTWF0aAoJaXRvYgoJY29uY2F0Cglsb2cKCWludGMgMCAvLyAxCglyZXR1cm4KCi8vIGRvTWF0aChhOiB1aW50NjQsIGI6IHVpbnQ2NCwgb3BlcmF0aW9uOiBzdHJpbmcpOiB1aW50NjQKLy8KLy8gQSBtZXRob2QgdGhhdCB0YWtlcyB0d28gbnVtYmVycyBhbmQgZG9lcyBlaXRoZXIgYWRkaXRpb24gb3Igc3VidHJhY3Rpb24KLy8KLy8gQHBhcmFtIGEgVGhlIGZpcnN0IHVpbnQ2NAovLyBAcGFyYW0gYiBUaGUgc2Vjb25kIHVpbnQ2NAovLyBAcGFyYW0gb3BlcmF0aW9uIFRoZSBvcGVyYXRpb24gdG8gcGVyZm9ybS4gQ2FuIGJlIGVpdGhlciAnc3VtJyBvciAnZGlmZmVyZW5jZScKLy8KLy8gQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uCmRvTWF0aDoKCXByb3RvIDMgMQoKCS8vIFB1c2ggZW1wdHkgYnl0ZXMgYWZ0ZXIgdGhlIGZyYW1lIHBvaW50ZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgbG9jYWwgdmFyaWFibGVzCglwdXNoYnl0ZXMgMHgKCgkvLyAqaWYwX2NvbmRpdGlvbgoJLy8gY29udHJhY3RzL0FkYXNoZUNvbnRyYWN0LmFsZ28udHM6MzgKCS8vIG9wZXJhdGlvbiA9PT0gJ3N1bScKCWZyYW1lX2RpZyAtMyAvLyBvcGVyYXRpb246IHN0cmluZwoJcHVzaGJ5dGVzIDB4NzM3NTZkIC8vICJzdW0iCgk9PQoJYnogKmlmMF9lbHNlaWYxX2NvbmRpdGlvbgoKCS8vICppZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL0FkYXNoZUNvbnRyYWN0LmFsZ28udHM6MzkKCS8vIHJlc3VsdCA9IHRoaXMuZ2V0U3VtKGEsIGIpCglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CgljYWxsc3ViIGdldFN1bQoJZnJhbWVfYnVyeSAwIC8vIHJlc3VsdDogdWludDY0CgliICppZjBfZW5kCgoqaWYwX2Vsc2VpZjFfY29uZGl0aW9uOgoJLy8gY29udHJhY3RzL0FkYXNoZUNvbnRyYWN0LmFsZ28udHM6NDAKCS8vIG9wZXJhdGlvbiA9PT0gJ2RpZmZlcmVuY2UnCglmcmFtZV9kaWcgLTMgLy8gb3BlcmF0aW9uOiBzdHJpbmcKCXB1c2hieXRlcyAweDY0Njk2NjY2NjU3MjY1NmU2MzY1IC8vICJkaWZmZXJlbmNlIgoJPT0KCWJ6ICppZjBfZWxzZQoKCS8vICppZjBfZWxzZWlmMV9jb25zZXF1ZW50CgkvLyBjb250cmFjdHMvQWRhc2hlQ29udHJhY3QuYWxnby50czo0MQoJLy8gcmVzdWx0ID0gdGhpcy5nZXREaWZmZXJlbmNlKGEsIGIpCglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0CglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CgljYWxsc3ViIGdldERpZmZlcmVuY2UKCWZyYW1lX2J1cnkgMCAvLyByZXN1bHQ6IHVpbnQ2NAoJYiAqaWYwX2VuZAoKKmlmMF9lbHNlOgoJLy8gSW52YWxpZCBvcGVyYXRpb24KCWVycgoKKmlmMF9lbmQ6CgkvLyBjb250cmFjdHMvQWRhc2hlQ29udHJhY3QuYWxnby50czo0NAoJLy8gcmV0dXJuIHJlc3VsdDsKCWZyYW1lX2RpZyAwIC8vIHJlc3VsdDogdWludDY0CgoJLy8gc2V0IHRoZSBzdWJyb3V0aW5lIHJldHVybiB2YWx1ZQoJZnJhbWVfYnVyeSAwCglyZXRzdWIKCi8vIGhlbGxvKHN0cmluZylzdHJpbmcKKmFiaV9yb3V0ZV9oZWxsbzoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZWMgMCAvLyAweDE1MWY3Yzc1CgoJLy8gbmFtZTogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIGV4ZWN1dGUgaGVsbG8oc3RyaW5nKXN0cmluZwoJY2FsbHN1YiBoZWxsbwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNvbmNhdAoJbG9nCglpbnRjIDAgLy8gMQoJcmV0dXJuCgovLyBoZWxsbyhuYW1lOiBzdHJpbmcpOiBzdHJpbmcKLy8KLy8gQSBkZW1vbnN0cmF0aW9uIG1ldGhvZCB1c2VkIGluIHRoZSBBbGdvS2l0IGZ1bGxzdGFjayB0ZW1wbGF0ZS4KLy8gR3JlZXRzIHRoZSB1c2VyIGJ5IG5hbWUuCi8vCi8vIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB1c2VyIHRvIGdyZWV0LgovLyBAcmV0dXJucyBBIGdyZWV0aW5nIG1lc3NhZ2UgdG8gdGhlIHVzZXIuCmhlbGxvOgoJcHJvdG8gMSAxCgoJLy8gY29udHJhY3RzL0FkYXNoZUNvbnRyYWN0LmFsZ28udHM6NTUKCS8vIHJldHVybiAnSGVsbG8sICcgKyBuYW1lOwoJcHVzaGJ5dGVzIDB4NDg2NTZjNmM2ZjJjMjAgLy8gIkhlbGxvLCAiCglmcmFtZV9kaWcgLTEgLy8gbmFtZTogc3RyaW5nCgljb25jYXQKCXJldHN1YgoKKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCWludGMgMCAvLyAxCglyZXR1cm4KCipjcmVhdGVfTm9PcDoKCXB1c2hieXRlcyAweGI4NDQ3YjM2IC8vIG1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNyZWF0ZSBOb09wCgllcnIKCipjYWxsX05vT3A6CglwdXNoYnl0ZXMgMHg3NmE3ZWYzMyAvLyBtZXRob2QgImRvTWF0aCh1aW50NjQsdWludDY0LHN0cmluZyl1aW50NjQiCglwdXNoYnl0ZXMgMHgwMmJlY2UxMSAvLyBtZXRob2QgImhlbGxvKHN0cmluZylzdHJpbmciCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2RvTWF0aCAqYWJpX3JvdXRlX2hlbGxvCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNhbGwgTm9PcAoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "AdasheContract",
    "desc": "",
    "methods": [
      {
        "name": "doMath",
        "desc": "A method that takes two numbers and does either addition or subtraction",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": "The first uint64"
          },
          {
            "name": "b",
            "type": "uint64",
            "desc": "The second uint64"
          },
          {
            "name": "operation",
            "type": "string",
            "desc": "The operation to perform. Can be either 'sum' or 'difference'"
          }
        ],
        "returns": {
          "type": "uint64",
          "desc": "The result of the operation"
        }
      },
      {
        "name": "hello",
        "desc": "A demonstration method used in the AlgoKit fullstack template.\nGreets the user by name.",
        "args": [
          {
            "name": "name",
            "type": "string",
            "desc": "The name of the user to greet."
          }
        ],
        "returns": {
          "type": "string",
          "desc": "A greeting message to the user."
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the AdasheContract smart contract.
 */
export type AdasheContract = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'doMath(uint64,uint64,string)uint64' | 'doMath', {
      argsObj: {
        /**
         * The first uint64
         */
        a: bigint | number
        /**
         * The second uint64
         */
        b: bigint | number
        /**
         * The operation to perform. Can be either 'sum' or 'difference'
         */
        operation: string
      }
      argsTuple: [a: bigint | number, b: bigint | number, operation: string]
      /**
       * The result of the operation
       */
      returns: bigint
    }>
    & Record<'hello(string)string' | 'hello', {
      argsObj: {
        /**
         * The name of the user to greet.
         */
        name: string
      }
      argsTuple: [name: string]
      /**
       * A greeting message to the user.
       */
      returns: string
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type AdasheContractSig = keyof AdasheContract['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends AdasheContractSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the AdasheContract smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends AdasheContractSig> = AdasheContract['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the AdasheContract smart contract to the method's return type
 */
export type MethodReturn<TSignature extends AdasheContractSig> = AdasheContract['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type AdasheContractCreateCalls = (typeof AdasheContractCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type AdasheContractCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type AdasheContractDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: AdasheContractCreateCalls) => AdasheContractCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class AdasheContractCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the AdasheContract smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the doMath(uint64,uint64,string)uint64 ABI method
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'doMath(uint64,uint64,string)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b, args.operation],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the hello(string)string ABI method
   *
   * A demonstration method used in the AlgoKit fullstack template.
Greets the user by name.
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'hello(string)string' as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    }
  }
}

/**
 * A client to make calls to the AdasheContract smart contract
 */
export class AdasheContractClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `AdasheContractClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof AdasheContract['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the AdasheContract smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: AdasheContractDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(AdasheContractCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the AdasheContract smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication()void'>, AppCreateCallTransactionResult>(await $this.appClient.create(AdasheContractCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the AdasheContract smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the doMath(uint64,uint64,string)uint64 ABI method.
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The result of the operation
   */
  public doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AdasheContractCallFactory.doMath(args, params))
  }

  /**
   * Calls the hello(string)string ABI method.
   *
   * A demonstration method used in the AlgoKit fullstack template.
Greets the user by name.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: A greeting message to the user.
   */
  public hello(args: MethodArgs<'hello(string)string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AdasheContractCallFactory.hello(args, params))
  }

  public compose(): AdasheContractComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.doMath(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      hello(args: MethodArgs<'hello(string)string'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.hello(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as AdasheContractComposer
  }
}
export type AdasheContractComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the doMath(uint64,uint64,string)uint64 ABI method.
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AdasheContractComposer<[...TReturns, MethodReturn<'doMath(uint64,uint64,string)uint64'>]>

  /**
   * Calls the hello(string)string ABI method.
   *
   * A demonstration method used in the AlgoKit fullstack template.
Greets the user by name.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  hello(args: MethodArgs<'hello(string)string'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AdasheContractComposer<[...TReturns, MethodReturn<'hello(string)string'>]>

  /**
   * Makes a clear_state call to an existing instance of the AdasheContract smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): AdasheContractComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): AdasheContractComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<AdasheContractComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<AdasheContractComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type AdasheContractComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type AdasheContractComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
