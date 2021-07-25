import React, { Component } from 'react';
import clientImg from '../../img/client1.svg';

export class ClientsComponent extends Component {
    constructor(props){
        super(props)

    }
  render() {
    return (
      <div className="col-12 m-0 col-md-2 mt-3 bg-light shadow d-flex flex-column align-items-center justify-content-center">
        <div className="clientCard py-5">
          <img src={this.props.data.img} className="mb-4" alt="" />
          <div className="clientName">{this.props.data.clientName}</div>
        </div>
      </div>
    );
  }
}

export default ClientsComponent;
