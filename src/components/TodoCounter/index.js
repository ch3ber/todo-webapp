import React from 'react';
import '../../styles/index.css';

function TodoCounter({total, completed}) {
   return (
      <h2 className="todo-counter">Has completado {completed} de {total} TODOs</h2>
   );
}

export {TodoCounter};
