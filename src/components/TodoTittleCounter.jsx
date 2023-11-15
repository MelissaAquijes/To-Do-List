import React from 'react';
import '../styles/TodoTittleCounter.css';
import { TodoContext } from '../context/TodoContext';
import Confetti from "react-confetti";



function TodoTittleCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <>
      {(totalTodos === completedTodos && totalTodos >=1) &&
        <h1 className='tittleCongratulations'>
          <Confetti className="confeti" gravity={0.02} />
          Congratulations, you completed all the pending tasks.
        </h1>
      }

      {(totalTodos !== completedTodos || totalTodos === 0) &&
        <h1 className='tittleCounter'>
        You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> to do's.
        </h1>
      }
    </>
  );
}

export { TodoTittleCounter };