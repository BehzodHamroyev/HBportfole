import React, { Component } from 'react';
import './TestimonialsComponent.css';
import Testimonials1 from '../../img/Testimonials1.svg';
import Testimonials2 from '../../img/Testimonials2.svg';
import Testimonials3 from '../../img/Testimonials3.svg';
import Testimonials4 from '../../img/Testimonials4.svg';
import Testimonials5 from '../../img/Testimonials5.svg';
import Testimonials6 from '../../img/Testimonials6.svg';
export class TestimonialsComponent extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div className="TestimonialsComponent m-0 py-5 ">
        <div className="position-relative d-flex justify-content-between row ">
          <div className="col-12 col-md-6 pt-3  d-flex justify-content-around">
            <img src={this.props.data.img2} classname="Testimonials2 " alt="" />
            <img src={this.props.data.img3} classname="Testimonials3  " alt="" />
          </div>
          <div className="col-12 col-md-6 pt-3 d-flex justify-content-around">
            <img src={this.props.data.img5} classname="Testimonials5 " alt="" />
            <img src={this.props.data.img6} classname="Testimonials6 " alt="" />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <img src={this.props.data.img1} alt="" />
            <p className="comment py-5">
           {this.props.data.comment}
            </p>
            <div>
              <img src={this.props.data.img4} alt="" />
              <p className="name fs-5 text-dark m-0">{this.props.data.name}</p>
              <p className="job m-0">{this.props.data.job}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialsComponent;
