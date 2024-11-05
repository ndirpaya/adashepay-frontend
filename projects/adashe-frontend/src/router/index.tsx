import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Home';
import Dashboard from '../pages/Dashboard';
// import AdasheDashboard from '../pages/AdasheDashboard';


function EntryPoint() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default EntryPoint;