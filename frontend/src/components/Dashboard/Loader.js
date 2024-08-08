import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <FontAwesomeIcon
      icon={faSpinner}
      className="text-violet-500 text-4xl animate-spin"
    />
  </div>
);

export default Loader;
