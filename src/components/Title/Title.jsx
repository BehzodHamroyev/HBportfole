import React, { Component } from 'react';
import './Title.css';
export class Title extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div className="text-start">
        <p className="subTitle">{this.state.subTitle}</p>
        <div className="line"></div>
        <h1 className="title mt-3">{this.state.title}</h1>
      </div>
    );
  }
}

export default Title;
