import React, { Component } from 'react'
import Footer1 from '../../img/footer1.svg'
import Footer2 from '../../img/footer2.svg'
import Footer3 from '../../img/footer3.svg'
import './Footer.css';
import Fade from 'react-reveal/Fade';

export class Footer extends Component {
  render() {
    return (
      <div id="Footer" className="d-flex py-5 footer flex-column row m-0 justify-content-center align-items-center">
    <Fade bottom>   <div className="col-4">
       <h1>Let’s be Friends</h1>
        <div className="icon mt-4 d-flex justify-content-around align-items-center">
          <img src={Footer1} alt="" />
          <img src={Footer2} alt="" />
          <img src={Footer3} alt="" />
        </div>
       </div>
      </Fade>

      </div>
    )
  }
}

export default Footer
