import React from 'react';
import { Header } from './components/Header';
import { ContainerAll } from './ContainerAll';
import { ContainerNav } from './ContainerNav';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoTittleCounter } from './components/TodoTittleCounter';


function AppUI() {
  return(
    <ContainerAll>
      <Header />
      <ContainerNav>
        <TodoSearch />
        <CreateTodoButton />
      </ContainerNav>
      <TodoTittleCounter />

    </ContainerAll>

  );
}

export { AppUI };