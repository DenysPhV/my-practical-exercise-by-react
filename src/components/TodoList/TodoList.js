import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="todo__list">
    {todos.map(({ id, text }) => (
      <li key={id} className="todo__items">
        <p>{text}</p>
        <button
          type="button"
          onClick={() => onDeleteTodo(id)}
          className="todo__btn"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default TodoList;
