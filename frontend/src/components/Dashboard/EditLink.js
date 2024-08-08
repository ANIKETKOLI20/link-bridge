import React, { useState } from 'react';

const EditLink = ({ link, onUpdateLink }) => {
  const [url, setUrl] = useState(link.url);
  const [title, setTitle] = useState(link.title); 

    // to handle submit functionality

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateLink({ ...link, url, title }); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded border border-gray-300 shadow-2xl w-full max-w-md">
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-black font-bold">Title</span> 
          </label>
          <input 
            type="text" 
            className="input input-bordered w-full bg-gray-50 placeholder-gray-500 border-black text-black"
            value={title} 
            placeholder="Title" 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-black font-bold">Edit URL</span>
          </label>
          <input 
            type="text" 
            className="input input-bordered w-full bg-gray-50 placeholder-gray-500 border-black text-black"
            value={url}
            placeholder="URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn bg-violet-800 hover:bg-violet-600 w-72 rounded-2xl text-white border-none">Update Link</button>
        </div>
      </form>
    </div>
  );
};

export default EditLink;
