import React from 'react';
import '../../styles/index.css';

function TodoItem(props) {
   return (
      <li className={'todo'}>
         <span
            className={'todo__icon'}
            onClick={props.onComplete}
         >
            uwu
         </span>
         <p
            className={`todo__text ${props.completed && 'todo__text--completed'}`}
         >
            {props.text}
         </p>
         <span
            className={'todo__icon'}
            onClick={props.onDelete}
         >
            &#215;
         </span>
      </li>
   );
}

export {TodoItem};
