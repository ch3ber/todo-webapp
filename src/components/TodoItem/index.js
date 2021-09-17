import React from 'react';
import '../../styles/index.css';
import {FaTrashAlt} from 'react-icons/fa';

function TodoItem(props) {
   return (
      <li className={'todo'}>
         <p
            onClick={props.toggleComplete}
            className={`todo__text ${props.completed && 'todo__text--completed'}`}
         >
            {props.text}
         </p>
         <span
            className={'todo__icon'}
            onClick={props.onDelete}
         >
            <FaTrashAlt fill="#fff" fontSize="3.5rem" />
         </span>
      </li>
   );
}

export {TodoItem};
