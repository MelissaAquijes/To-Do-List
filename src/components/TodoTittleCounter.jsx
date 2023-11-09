import React from 'react';
import '../styles/TodoTittleCounter.css';
import { TodoContext } from '../context/TodoContext';

function TodoTittleCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className='tittleCounter'>
      You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> to do's.
    </h1>
  );
}

export { TodoTittleCounter };