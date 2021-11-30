import React from 'react';
import classNames from 'classnames';
import s from './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames(s.TodoList__item, {
          [s.TodoList__itemCompleted]: completed,
        })}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
          className={s.TodoList__checkbox}
        />
        <p className={s.TodoList__text}>{text}</p>
        <button
          type="button"
          onClick={() => onDeleteTodo(id)}
          className={s.TodoList__btn}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default TodoList;
