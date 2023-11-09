import '../styles/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className='createTodoButton'
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >
    Add task
    </button>
  );
}

export { CreateTodoButton };