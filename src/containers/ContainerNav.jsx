import React from 'react';
import '../styles/ContainerNav.css';

function ContainerNav({ children }) {
  return (
    <div className='containerNav'>
      {children}
    </div>
  );
}

export { ContainerNav };