import { Component } from 'react';
// import paintings from './paintings.json';
// import PaintingList from './components/PaintingList';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown/Dropdown';
import TodoList from 'components/TodoList';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoID) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoID),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        {/* <Dropdown /> */}
        {/* <Counter /> */}
        {/* <PaintingList items={paintings} /> */}
        <div>
          <p>Общее кол-во:</p>
          <p>Кол-во выполненных:</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
