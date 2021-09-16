import React from 'react';
import { TodoContex } from '../../TodoContex';
import '../../styles/index.css';

function TodoCounter() {
   const {totalTodos, completedTodos} = React.useContext(TodoContex);
   return (
      <h2 className="todo-counter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
   );
}

export {TodoCounter};
