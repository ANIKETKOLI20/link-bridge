import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddLink from './AddLink';
import LinkList from './LinkList';
import EditLink from './EditLink';
import Navbar from './Navbar';

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState('');
  const [editingLink, setEditingLink] = useState(null); 

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get('/api/links', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setLinks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchLinks();
  }, []);



    // to handle add links

  const handleAddLink = async (link) => {
    try {
      const response = await axios.post('/api/links', link, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setLinks([...links, response.data]);
      document.getElementById('my_modal_3').close(); 
    } catch (err) {
      setError(err.message);
    }
  };

  //   // to handle update links functionality

  const handleUpdateLink = async (updatedLink) => {
    try {
      const response = await axios.put(`/api/links/${updatedLink._id}`, updatedLink, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setLinks(links.map(link => (link._id === updatedLink._id ? response.data : link)));
      setEditingLink(null); 
    } catch (err) {
      setError(err.message);
    }
  };

    // to handle delete links functionality

  const handleDeleteLink = async (linkId) => {
    try {
      await axios.delete(`/api/links/${linkId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setLinks(links.filter(link => link._id !== linkId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar /> 
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="mt-4">
            <button
              className="btn btn-wide bg-violet-800 hover:bg-violet-600 rounded-2xl text-white border-none"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Add Link
            </button>
          </div>
          <main className="container mx-auto p-4 mt-8"> 
            <LinkList
              links={links}
              isLoading={isLoading} 
              onEdit={setEditingLink}
              onDelete={handleDeleteLink}
            />
          </main>
        </div>

        {/* Modal for Adding Link */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dialog bg-gray-100 max-h-15">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <AddLink onAddLink={handleAddLink} />
          </div>
        </dialog>

        {/* Modal for Editing Link */}
        {editingLink && (
          <dialog open className="modal">
            <div className="modal-box dialog bg-gray-100 max-h-15">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setEditingLink(null)}>✕</button>
              </form>
              <EditLink link={editingLink} onUpdateLink={handleUpdateLink} />
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};

export default Dashboard;
