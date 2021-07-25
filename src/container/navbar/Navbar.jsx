import React, { Component } from 'react';
import Logo from './logo.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import './Navbar.css';
const data = [
  {
    title: 'About',
    url: '#About',
  },
  {
    title: 'Services',
    url: '#Services',
  },
  {
    title: 'Works',
    url: '#Works',
  },
  {
    title: 'Blog',
    url: '#Blog',
  },
  {
    title: 'ContactMe',
    url: '#ContactMe',
  }
];
export class Navbar extends Component {
  state = { show: true };
  showMenu = () => {
    this.setState((state) => {
      console.log(this.state.show);
      return { show: !this.state.show };
    });
  };

  render() {
    return (
      <div className="navbar shadow container-fluid px-3">
        <img src={Logo} alt="" className="logo" />
        <div
          onClick={this.showMenu}
          className="rounded-circle d-md-none d-flex bg-light bars shadow"
        >
          <FaBars className={`${(!this.state.show && 'd-none') || 'd-block'}`} />
          <FaTimes
            className={`${(this.state.show && 'd-none') || 'd-block'}`}
          />
        </div>
        <ul className={`${(this.state.show && 'showMenu') || 'media'}`}>
          {data.map((v, i) => {
            return (
              <li key={`${i}`}>
               <Fade top> <a key={`${i}`} className="d-block me-5 mt-2" href={`${v.url}`}>
                  {`${v.title}`}
                </a>
                </Fade>
              </li>
            );
          })}
        </ul>

        <div className="rounded-circle d-md-flex d-none bg-light bars shadow">
          <FaBars />
        </div>
      </div>
    );
  }
}

export default Navbar;
