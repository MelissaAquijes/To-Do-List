import React from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/TodoForm.css';

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
    <form
      className='form'
      onSubmit={onSubmit}
    >
      <label className='label'>
        Write your new to do!
      </label>

      <textarea
        className='textarea'
        placeholder='Write here...'
        value={newTodoValue}
        onChange={onChange}
      />

      <div className='buttonsContainer'>
        <button
          className='buttonForm'
          type='button'
          onClick={onCancel}>
        Cancel
        </button>

        <button
          className='buttonForm'
          type='submit'>
        Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };