import React from 'react';
import '../styles/ContainerAll.css';

function ContainerAll({ children }) {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export { ContainerAll };