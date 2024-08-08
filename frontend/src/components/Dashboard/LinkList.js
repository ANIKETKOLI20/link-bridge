import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import Loader from './Loader'; 

const LinkList = ({ links, isLoading, onEdit, onDelete }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (links.length === 0) {
    return <p className="text-center">No links available</p>;
  }

  return ( 
    <div className="w-3/4 mx-auto flex flex-col justify-center space-y-4 rounded-2xl"> 
      {links.map(link => (
        <div key={link._id} className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-black">{link.title}</h3>
            <a href={link.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">{link.url}</a>
          </div>
          <div className="flex items-center space-x-2">
            <button className="btn btn-ghost" onClick={() => onEdit(link)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="btn btn-ghost text-red-500" onClick={() => onDelete(link._id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
