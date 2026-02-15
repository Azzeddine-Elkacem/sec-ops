import React from 'react';
import { ShieldAlert, Users, HardDrive, Activity, Lock } from 'lucide-react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('current_user'));

  // Define Admin Content
  const AdminView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-red-400">System Administrator Console</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 border border-red-500/20 rounded-xl">
          <Users className="mb-2 text-red-400" />
          <h3 className="font-bold text-zinc-100">User Management</h3>
          <p className="text-sm text-zinc-400">Manage 14 active startup accounts.</p>
        </div>
        <div className="p-6 bg-white/5 border border-red-500/20 rounded-xl">
          <HardDrive className="mb-2 text-red-400" />
          <h3 className="font-bold text-zinc-100">Global Infrastructure</h3>
          <p className="text-sm text-zinc-400">Server load: 24%. All nodes healthy.</p>
        </div>
        <div className="p-6 bg-white/5 border border-red-500/20 rounded-xl">
          <ShieldAlert className="mb-2 text-red-400" />
          <h3 className="font-bold text-zinc-100">Critical Alerts</h3>
          <p className="text-sm text-zinc-400">0 unresolved system breaches.</p>
        </div>
      </div>
    </div>
  );

  // Define User Content
  const UserView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-400">Startup Security Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white/5 border border-blue-500/20 rounded-xl">
          <Activity className="mb-2 text-blue-400" />
          <h3 className="font-bold text-zinc-100">Active Pentest</h3>
          <p className="text-sm text-zinc-400">Scanning your web app for vulnerabilities...</p>
        </div>
        <div className="p-6 bg-white/5 border border-blue-500/20 rounded-xl">
          <Lock className="mb-2 text-blue-400" />
          <h3 className="font-bold text-zinc-100">Compliance Status</h3>
          <p className="text-sm text-zinc-400">75% ready for ISO 27001 audit.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-zinc-100 text-sm font-mono uppercase tracking-widest mb-2">
          Authenticated as: {user?.role}
        </h1>
        {/* Switch content based on role */}
        {user?.role === 'admin' ? <AdminView /> : <UserView />}
      </div>
    </div>
  );
};

export default Dashboard;