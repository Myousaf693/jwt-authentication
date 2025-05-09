import React from 'react';
import Sidebar from '../../compnents/Sidebar';
import Topbar from '../../compnents/Topbar';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
