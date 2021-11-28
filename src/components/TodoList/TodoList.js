import React from 'react';
import classNames from 'classnames';
import './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
          className="TodoList__checkbox"
        />
        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          onClick={() => onDeleteTodo(id)}
          className="TodoList__btn"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default TodoList;
