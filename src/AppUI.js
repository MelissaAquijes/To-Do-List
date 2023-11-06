import React from 'react';
import { Header } from './components/Header';
import { ContainerAll } from './ContainerAll';
import { TodoSearch } from './components/TodoSearch';

function AppUI() {
  return(
    <ContainerAll>
      <Header />
      <TodoSearch />
    </ContainerAll>

  );
}

export { AppUI };