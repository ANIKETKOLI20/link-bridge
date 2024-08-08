import React, { useEffect, useState } from "react";

function Navbar() {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    const randomImage = `https://robohash.org/${storedUsername}.png?size=50x50`;
    setProfileImage(randomImage);
  }, []);

  // to handle Logout functionality

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="bg-teal-400 p-2 flex justify-between items-center">
      <div className="flex space-x-4">
        <img src="/Logo.jpg" className="h-15 w-20 rounded ml-8" alt="logo" />
      </div>
      <div className="flex items-center space-x-4">
        {username && (
          <>
            <div className="h-12 w-12 rounded-full border-2 border-violet-500 flex items-center justify-center">
              <img
                src={profileImage}
                className="h-10 w-10 rounded-full"
                alt="profile"
              />
            </div>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 mr-8">
                {username}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
              >
                <li>
                <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
