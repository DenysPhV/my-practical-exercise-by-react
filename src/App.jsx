import { Component } from 'react';
import shortid from 'shortid';
// import initialTodos from './todos.json';
// import paintings from './paintings.json';

import Container from 'components/Container';
// import PaintingList from './components/PaintingList';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown/Dropdown';

import TodoList from 'components/TodoList';
import Filter from 'components/Filter';
import TodoEditor from './components/TodoEditor';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // warning!!! to checking on there a data
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //don`t never write "setState" in inside this is function, by only condition
    const { todos } = this.state;
    if (todos !== prevState.todos) {
      console.log('it is update');

      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  // delete card todo`s
  deleteTodo = (todoID) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== todoID),
    }));
  };

  // тоглим чекбоксы типа выполнили на каротчках
  toggleCompleted = (todoID) => {
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoID) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    // ternarniar
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    //вычесляемые значения возми то что у тебя есть и вычесли не засерая стейт
    const totalTodoCount = todos.length;
    const completedTodosCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Container>
          <button type="button" onClick={this.toggleModal}>
            on modal
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <TodoEditor onSubmit={this.addTodo} />
              <button type="button" onClick={this.toggleModal}>
                off modal
              </button>
            </Modal>
          )}
          {/*Работа с колекциями*/}
          {/* <Dropdown /> */}
          {/* <Counter /> */}
          {/* <PaintingList items={paintings} /> */}

          <div>
            <p>Общее кол-во:{totalTodoCount}</p>
            <p>Кол-во выполненных:{completedTodosCount}</p>
          </div>

          <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Container>
      </>
    );
  }
}

export default App;
