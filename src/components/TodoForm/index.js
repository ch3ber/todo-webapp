import React from "react";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    document.getElementById("modal").classList.toggle("modal--show");
    document.querySelector(".button").classList.toggle("button--modal");
    document.querySelector("#root").classList.toggle("blur");
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    document.getElementById("modal").classList.toggle("modal--show");
    document.querySelector(".button").classList.toggle("button--modal");
    document.querySelector("#root").classList.toggle("blur");
    setOpenModal(false);
  };

  return (
    <form className="modal" onSubmit={onSubmit}>
      <label>Añade un nuevo ToDo</label>
      <textarea
        className="modal__textarea"
        placeholder="Descripcion de tu ToDo"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="modal__buttons">
        <button className="modal__buttons__button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="modal__buttons__button" type="submit">
          Crear
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
