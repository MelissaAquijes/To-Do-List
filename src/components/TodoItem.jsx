import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import '../styles/TodoItem.css'

function TodoItem(props) {
  return (
    <li className="todoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />

    </li>
  );
}

export { TodoItem };

