import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${completed && 'Icon-complete'}`} onClick={onComplete}>
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p className={`${completed && 'complete'}`}>{text}</p>
      <span className='Icon Icon-delete' onClick={onDelete}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </span>
    </li>
  );
}

export { TodoItem };