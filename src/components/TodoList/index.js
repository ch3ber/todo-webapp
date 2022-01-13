import React from "react";
import "../../styles/index.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="todo-container">
      {props.error && props.onError()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &
          props.onEmptySearchResults(props.searchText)}

      <ul className="todo-container__list">
        {props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
