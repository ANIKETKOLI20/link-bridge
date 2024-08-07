import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md rounded">
      <div className="p-4">
        <h2 className="text-xl font-bold">Links</h2>
        <ul className="mt-4">
          <li className="mb-2"><a href="#" className="text-blue-500">Shop</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500">Appearance</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500">Analytics</a></li>
          <li className="mb-2"><a href="#" className="text-blue-500">Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
