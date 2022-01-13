import React from "react";
import "../../styles/index.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className={`search ${loading && "todo-counter--loading"}`}
      disabled={loading}
      placeholder="Buscar..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
