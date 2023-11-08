import React from 'react';
import { Header } from './Header';
import { ContainerAll } from '../containers/ContainerAll';
import { ContainerNav } from '../containers/ContainerNav';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoTittleCounter } from './TodoTittleCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../context/TodoContext';
import { EmptyTodos} from './EmptyTodos';

function AppUI() {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return(
    <ContainerAll>
      <Header />

      <ContainerNav>
        <TodoSearch />
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />

        {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      </ContainerNav>

      <TodoTittleCounter />

      <TodoList>
      {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchTodos.length === 0) && <EmptyTodos />}
        {searchTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

    </ContainerAll>

  );
}

export { AppUI };