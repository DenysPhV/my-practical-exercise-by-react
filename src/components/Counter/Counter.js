import React, { Component } from 'react';

import s from './Counter.module.css';

class Counter extends Component {
  // state всегда объект и под Бабелем компилируется в конструктор
  state = {
    value: 0,
  };
  //public arrow function
  //евент доступен только в синхроном коде, если необходимо асинроный нужно сохронить в переменую

  //не имею права обновлять стайт в ручную из любой функции ни когда запомни
  handleIncrement = () => {
    console.log('click +1');
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    console.log('click -1');
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className={s.container}>
        <span>{this.state.value}</span>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
