import React from 'react';

const Spinner = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-5">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-center rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;