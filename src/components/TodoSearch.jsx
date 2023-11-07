import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch() {
  return (
    <input
      className='inputSearch'
      placeholder='Search for a task...'
    />
  );
}

export { TodoSearch };