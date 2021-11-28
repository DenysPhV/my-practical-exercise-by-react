import { Component } from 'react';
import shortid from 'shortid';
// import paintings from './paintings.json';
// import PaintingList from './components/PaintingList';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown/Dropdown';
import TodoList from 'components/TodoList';
import Filter from 'components/Filter';
import TodoEditor from './components/TodoEditor';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

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
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoID),
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

  render() {
    const { todos, filter } = this.state;
    //вычесляемые значения возми то что у тебя есть и вычесли не засерая стейт
    const totalTodoCount = todos.length;
    const completedTodosCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <Dropdown /> */}
        {/* <Counter /> */}
        {/* <PaintingList items={paintings} /> */}

        <div>
          <p>Общее кол-во:{totalTodoCount}</p>
          <p>Кол-во выполненных:{completedTodosCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
