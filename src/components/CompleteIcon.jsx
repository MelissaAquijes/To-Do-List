import React from 'react';
import { TodoIcon } from './TodoIcon'

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? '#8C82FC' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };