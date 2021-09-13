import React from 'react';
import '../../styles/index.css';

function TodoList(props) {
   return (
      <section className="todo-container">
         {props.children}
      </section>
   );
}

export {TodoList};
