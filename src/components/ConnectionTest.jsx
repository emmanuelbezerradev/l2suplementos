import React from 'react';
import BackendStatus from './BackendStatus';

const ConnectionTest = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <BackendStatus />
    </div>
  );
};

export default ConnectionTest;
