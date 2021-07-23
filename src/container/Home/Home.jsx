import React, { Component } from 'react';
import Avatar from '../../avatar.svg';
import Button from '../../components/Button';
import './Home.css';
export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center text-start col-md-6">
            <p className="py-3">Hello,</p>
            <h1>Adam Zakob</h1>
            <p className="py-3">a freelance UX Designer</p>
            <Button title="Let’s Talk"/>
          </div>
          <div className="col-12 col-md-6">
            <img className="w-100 img-fluid" src={Avatar} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
