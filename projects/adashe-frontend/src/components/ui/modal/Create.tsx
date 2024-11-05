import React, { useState } from 'react';
import Button from '../button'; // Assuming a Button component is available
import { Input } from '../input'; // Assuming a basic Input component
import { Label } from '../label'; // Assuming a basic Label component

type IModalForm = {
  isOpen: boolean, onClose: () => void
}

const ModalForm: React.FC<IModalForm> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contributionAmount: '',
    cycleDays: '',
    maxMembers: '',
    emergencyPoolPercentage: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (mock or actual logic)
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null; // If modal is not open, render nothing

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-full sm:w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create New Group</h2>
          <Button text='Create New Group' onClick={onClose} className="text-gray-500" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Group Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Enter group name"
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
              placeholder="Amount in ALGO"
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
              placeholder="Cycle in days"
            />
          </div>
          <div>
            <Label htmlFor="maxMembers">Max Members</Label>
            <Input
              id="maxMembers"
              type="number"
              value={formData.maxMembers}
              onChange={(e) => setFormData({ ...formData, maxMembers: e.target.value })}
              required
              placeholder="Maximum members allowed"
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
              placeholder="Emergency Pool %"
            />
          </div>
          <div>
            <Button text='Create Group' type="submit" className="w-full bg-blue-500 text-white" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;