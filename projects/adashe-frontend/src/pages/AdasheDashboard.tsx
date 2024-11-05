import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import Button from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Plus, Users, Wallet, AlertCircle, UserPlus, Vote } from 'lucide-react';

// Mock Algorand SDK functions - Replace with actual SDK in production
const mockAlgorand = {
  connectWallet: async () => ({ address: "MOCK_ADDRESS" }),
  createGroup: async (params) => ({ txId: "MOCK_TX_ID" }),
  contribute: async (groupId, amount) => ({ txId: "MOCK_TX_ID" }),
  vote: async (proposalId, vote) => ({ txId: "MOCK_TX_ID" })
};

const AdasheDashboard = () => {
  const [notification, setNotification] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showMemberDialog, setShowMemberDialog] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(false);

  // Show notification for 5 seconds
  const showNotification = (title, message, type = 'info') => {
    setNotification({ title, message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const [activeGroups] = useState([
    {
      id: 1,
      name: "Community Savings Circle",
      contributionAmount: 100,
      cycleDays: 30,
      memberCount: 12,
      maxMembers: 15,
      totalContributed: 1200,
      nextPayout: "2024-11-15",
      emergencyPool: 120,
      members: [
        { address: "ALGO123", joined: "2024-10-01", contributions: 2 },
        { address: "ALGO456", joined: "2024-10-02", contributions: 2 },
      ],
      emergencyProposals: [
        {
          id: 1,
          title: "Emergency Medical Fund",
          requestedAmount: 500,
          votes: 8,
          status: "active"
        }
      ]
    },
  ]);

  const connectWallet = async () => {
    try {
      setLoading(true);
      const connection = await mockAlgorand.connectWallet();
      setWallet(connection);
      showNotification(
        "Success",
        "Successfully connected to Algorand wallet",
        "success"
      );
    } catch (error) {
      showNotification(
        "Error",
        "Failed to connect wallet: " + error.message,
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Group Creation Form Component
  const CreateGroupForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      contributionAmount: "",
      cycleDays: "",
      maxMembers: "",
      payoutOrderType: "1",
      penaltyPercentage: "",
      emergencyPoolPercentage: ""
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        await mockAlgorand.createGroup(formData);
        showNotification(
          "Success",
          "Successfully created new savings group",
          "success"
        );
        setShowCreateDialog(false);
      } catch (error) {
        showNotification(
          "Error",
          "Failed to create group: " + error.message,
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Group Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="contributionAmount">Contribution Amount (ALGO)</Label>
          <Input
            id="contributionAmount"
            type="number"
            value={formData.contributionAmount}
            onChange={(e) => setFormData({ ...formData, contributionAmount: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="cycleDays">Cycle Length (Days)</Label>
          <Input
            id="cycleDays"
            type="number"
            value={formData.cycleDays}
            onChange={(e) => setFormData({ ...formData, cycleDays: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="maxMembers">Maximum Members</Label>
          <Input
            id="maxMembers"
            type="number"
            value={formData.maxMembers}
            onChange={(e) => setFormData({ ...formData, maxMembers: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="emergencyPoolPercentage">Emergency Pool Percentage</Label>
          <Input
            id="emergencyPoolPercentage"
            type="number"
            value={formData.emergencyPoolPercentage}
            onChange={(e) => setFormData({ ...formData, emergencyPoolPercentage: e.target.value })}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Create Group"}
        </Button>
      </form>
    );
  };

  // Member Management Component
  const MemberManagement = ({ group }) => {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Members</h3>
          <Button text="Invite Member" size="sm" disabled={group.memberCount >= group.maxMembers} />
          {/* <UserPlus className="w-4 h-4 mr-2" /> */}

          {/* </Button> */}
        </div>

        <div className="space-y-2">
          {/* {group.members.map((member, index) => (
            <Card key={index}>
              <CardContent className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{member.address.slice(0, 8)}...</p>
                  <p className="text-sm text-gray-500">Joined: {member.joined}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Contributions: {member.contributions}</p>
                </div>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </div>
    );
  };

  // Emergency Fund Management Component
  const EmergencyFundManagement = ({ group }) => {
    const handleVote = async (proposalId, vote) => {
      try {
        setLoading(true);
        await mockAlgorand.vote(proposalId, vote);
        showNotification(
          "Success",
          "Your vote has been successfully recorded",
          "success"
        );
      } catch (error) {
        showNotification(
          "Error",
          "Failed to record vote: " + error.message,
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Emergency Fund Proposals</h3>
          <Button text=' New Proposal' size="sm" />
          {/* <Plus className="w-4 h-4 mr-2" />

          </Button> */}
        </div>

        <div className="space-y-2">
          {group.emergencyProposals.map((proposal) => (
            <Card key={proposal.id}>
              <CardContent className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{proposal.title}</h4>
                    <p className="text-sm text-gray-500">
                      Requested: {proposal.requestedAmount} ALGO
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Vote className="w-4 h-4" />
                    <span>{proposal.votes} votes</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button
                    text='Approve'
                    size="sm"
                    onClick={() => handleVote(proposal.id, true)}
                    disabled={loading}
                  />


                  <Button
                    size="sm"
                    text="Reject"
                    // variant="outline"
                    onClick={() => handleVote(proposal.id, false)}
                    disabled={loading}
                  />

                  {/* </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6" />

      {/* {notification && (
        <Alert className={${notification.type === 'error' ? 'border-red-500' : 'border-green-500'}}>
      <AlertTitle>{notification.title}</AlertTitle>
      <AlertDescription>{notification.message}</AlertDescription>
    </Alert> */}
      )
}

{/* Header Section */ }
<div className="flex justify-between items-center">
  <h1 className="text-3xl font-bold">Adashe Pay Dashboard</h1>
  <div className="flex gap-2">
    {!wallet ? (
      <Button onClick={connectWallet} disabled={loading}>
        Connect Wallet
      </Button>
    ) : (
      <Button onClick={() => setShowCreateDialog(true)}>
        <Plus className="w-5 h-5 mr-2" />
        Create New Group
      </Button>
    )}
  </div>
</div>

{/* Stats Cards */ }
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* ... Stats cards content ... */}
</div>

{/* Group Creation Dialog */ }
{/* <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Savings Group</DialogTitle>
    </DialogHeader>
    <CreateGroupForm />
  </DialogContent>
</Dialog> */}

{/* Main Content */ }
<Card className="mt-6">
  <CardHeader>
    <CardTitle>Your Groups</CardTitle>
  </CardHeader>
  <CardContent>
    {/* <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active Groups</TabsTrigger>
        <TabsTrigger value="members">Member Management</TabsTrigger>
        <TabsTrigger value="emergency">Emergency Fund</TabsTrigger>
      </TabsList> */}

    <TabsContent value="active">
      <div className="space-y-4">
        {activeGroups.map(group => (
          <Card key={group.id} onClick={() => setSelectedGroup(group)} className="cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{group.name}</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-500">
                    <p>Contribution: {group.contributionAmount} ALGO</p>
                    <p>Cycle: Every {group.cycleDays} days</p>
                    <p>Members: {group.memberCount}/{group.maxMembers}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Pool</p>
                  <p className="text-xl font-bold">{group.totalContributed} ALGO</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Emergency Pool: {group.emergencyPool} ALGO
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>

    <TabsContent value="members">
      {selectedGroup ? (
        <MemberManagement group={selectedGroup} />
      ) : (
        <Alert>
          <AlertDescription>
            Select a group to manage members
          </AlertDescription>
        </Alert>
      )}
    </TabsContent>

    <TabsContent value="emergency">
      {selectedGroup ? (
        <EmergencyFundManagement group={selectedGroup} />
      ) : (
        <Alert>
          <AlertDescription>
            Select a group to manage emergency funds
          </AlertDescription>
        </Alert>
      )}
    </TabsContent>
  </Tabs>
</CardContent>
</Card >
    </div >
  );
};

export default AdasheDashboard;