import React from 'react';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-50">
        <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
        <p className="mb-4">Are you sure you want to delete this link?</p>
        <div className="flex justify-end space-x-2">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
