import React from 'react';
import { Header } from './components/Header';
import { ContainerAll } from './ContainerAll';

function AppUI() {
  return(
    <ContainerAll>
      <Header />
    </ContainerAll>

  );
}

export { AppUI };