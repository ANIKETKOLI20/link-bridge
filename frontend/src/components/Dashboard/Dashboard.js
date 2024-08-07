import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddLink from './AddLink';
import LinkList from './LinkList';
import CustomizePage from './CustomizePage';
import Navbar from './Navbar';

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get('/api/links', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setLinks(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLinks();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleAddLink = async (link) => {
    try {
      const response = await axios.post('/api/links', link, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setLinks([...links, response.data]);
      document.getElementById('my_modal_3').close(); // Close modal after adding link
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar /> {/* Navbar at the top */}
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="mt-4">
            <button
              className="btn btn-wide bg-violet-800 hover:bg-violet-600 rounded-2xl text-white"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Add Link
            </button>
          </div>
          <main className="container mx-auto p-4">
            {error && <div className="text-red-500">{error}</div>}
            <LinkList links={links} />
          </main>
          <button className="btn btn-info mt-4" onClick={handleLogout}>Logout</button>
        </div>

        {/* Modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dialog bg-gray-100 max-h-15">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <AddLink onAddLink={handleAddLink} />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Dashboard;
