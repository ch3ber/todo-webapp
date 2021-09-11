import React from 'react';
import './index.css';

function TodoItem(props) {
   const onCompleted = () => {
      alert(`Ya completaste el todo ${props.text}`);
   }
   return (
      <li>
         <p 
         onClick={onCompleted}
         className={`todo-item ${props.completed && 'completed'}`}>{props.text} <span className={`todo-item-icon`}>&#215;</span></p>
      </li>
   );
}

export {TodoItem};
