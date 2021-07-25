import React, { Component } from 'react';
import './ToDoComponet';

export class ToDoComponet extends Component {
    constructor(props){
        super(props);
        this.state=props;

    }
  render() {

    return (
      <div className="toDoCard mt-5">
        <div className="topCard d-flex align-items-center justify-content-between px-4">
          <img src={this.state.img} alt="" />
          <p>{this.state.title}</p>
        </div>
        <div className="commentCard  mt-4 text-start">
        {this.state.commentCard}
        </div>
      </div>
    );
  }
}

export default ToDoComponet;
