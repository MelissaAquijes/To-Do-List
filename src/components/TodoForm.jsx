import React from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return(
    <form onSubmit={onSubmit}>
      <label>Write your new to do!</label>
      <textarea
        placeholder='Write here...'
        value={newTodoValue}
        onChange={onChange}
      />

      <div>
        <button
          type='button'
          onClick={onCancel}>
        Cancel
        </button>

        <button
          type='submit'>
        Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };