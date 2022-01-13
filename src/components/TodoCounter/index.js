import React from "react";
import "../../styles/index.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`todo-counter ${loading && "todo-counter--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
