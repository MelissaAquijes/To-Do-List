import React from 'react';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './context/TodoContext';
import './App.css';

function App() {
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
