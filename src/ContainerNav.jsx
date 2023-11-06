import React from 'react';

function ContainerNav({children}) {
  return (
    <div className='containerNav'>
      {children}
    </div>
  );
}

export { ContainerNav };