import { ReactComponent as CheckSVG} from '../assets/check.svg';
import { ReactComponent as DeleteSVG} from '../assets/trash.svg';
import '../styles/TodoIcon.css';

const iconTypes = {
  'check': (color) => <CheckSVG className='icon-svg' fill={color}/>,
  'delete': (color) => <DeleteSVG className='icon-svg' fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`icon-container icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };