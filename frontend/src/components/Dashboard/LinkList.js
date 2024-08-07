import React from 'react';

const LinkList = ({ links }) => {
  return (
    <div className="space-y-4">
      {links.map(link => (
        <div key={link.id} className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{link.description}</h3>
              <a href={link.url} className="text-blue-500">{link.url}</a>
            </div>
            <button className="btn btn-ghost">...</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
