import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import { FaArrowRight } from 'react-icons/fa';
import PortfoleImg1 from '../../img/portfole1.svg';
import PortfoleImg2 from '../../img/portfole2.svg';
import './Portfolio.css';
import Fade from 'react-reveal/Fade';

export class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Fade left>
            <Title subTitle="Portfolio" title="All Creative Projects" />
          </Fade>
          <Fade right>
            <button className="btn btn-light rounded shadow">
              Explore More <FaArrowRight />
            </button>
          </Fade>
        </div>
        <div className="row">
          <Fade left>
            <div className="col-12 d-flex justify-content-center align-items-center col-md-6">
              <img className="img-fluid" src={PortfoleImg1} alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="col-12 d-flex justify-content-center align-items-center col-md-6">
              <img className="img-fluid" src={PortfoleImg2} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Portfolio;
