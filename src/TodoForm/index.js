import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
  const [newTodo, setNewTodo] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(preventDefault => !preventDefault);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setTimeout(() => {setOpenModal(preventDefault => !preventDefault)}, 200)
  };

  const onChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder="Escribe tu TODO"
      />
      <div>
        <button className="TodoForm-button-cancel" type="button" onClick={onCancel}>
          cancelar
        </button>
        <button className="TodoForm-button-add" type="submit">Añadir Todo</button>
      </div>
    </form>
  );
}

export { TodoForm };
