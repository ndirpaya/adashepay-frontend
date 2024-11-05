import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import Button from '../components/ui/button';
import { useWallet } from '@txnlab/use-wallet'
import { Plus, Users, Wallet, AlertCircle } from 'lucide-react';
import ConnectWallet from '../components/web3/ConnectWallet';

const Dashboard = () => {
  const [connect, connectSet] = React.useState<boolean>(false)
  const { activeAddress } = useWallet()
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
      emergencyPool: 120
    },
    {
      id: 2,
      name: "Business Growth Fund",
      contributionAmount: 500,
      cycleDays: 14,
      memberCount: 8,
      maxMembers: 10,
      totalContributed: 4000,
      nextPayout: "2024-11-10",
      emergencyPool: 400
    }
  ]);

  const [userStats] = useState({
    totalContributed: 600,
    groupsJoined: 2,
    nextContribution: "2024-11-08",
    nextPayout: "2024-12-15"
  });

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Adashe Pay Dashboard</h1>
        <div className='flex'>
          {activeAddress ? <Button text='Create New Group' className="flex items-center gap-2" /> : <Button text='Connect Wallet' className="flex items-center gap-2" onClick={() => connectSet(!connect)} />}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Wallet className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Total Contributed</p>
                <p className="text-2xl font-bold">{userStats.totalContributed} ALGO</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Groups Joined</p>
                <p className="text-2xl font-bold">{userStats.groupsJoined}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <AlertCircle className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Next Contribution</p>
                <p className="text-2xl font-bold">{userStats.nextContribution}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Your Groups</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active Groups</TabsTrigger>
              <TabsTrigger value="available">Available Groups</TabsTrigger>
            </TabsList> */}

          {/* <TabsContent value="active" className="mt-4"> */}
          <div className="space-y-4">
            {activeGroups.map(group => (
              <Card key={group.id}>
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
                  <div className="mt-4 flex gap-2">
                    <Button text='Contribute' />
                    <Button text='View Details' />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* </TabsContent> */}

          {/* <TabsContent value="available" className="mt-4"> */}
          <div className="text-center py-8 text-gray-500">
            No available groups to join at the moment.
          </div>
          {/* </TabsContent> */}
          {/* </Tabs> */}
        </CardContent>
      </Card>

      <ConnectWallet openModal={connect} closeModal={() => connectSet(!connect)} />
    </div >
  );
};

export default Dashboard;