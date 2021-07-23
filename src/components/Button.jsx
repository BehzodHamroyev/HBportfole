import React, { Component } from 'react';
import './Button.css';
export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div>
        <button className="btn button">{this.state.title}</button>
      </div>
    );
  }
}

export default Button;
