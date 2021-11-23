import { Component } from 'react';

import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className={s.drop}>
        <button onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && (
          <div className={s.drop__menu}>Menu a dropdown</div>
        )}
      </div>
    );
  }
}
export default Dropdown;
