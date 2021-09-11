import React from 'react';
import './index.css';

function TodoList(props) {
   return (
      <section className="todo-list">
         {props.children}
      </section>
   );
}

export {TodoList};
