import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './ContactMe.css';
import Button from '../../components/Button';
import { FaArrowRight, FaPaperclip } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { Form, FormGroup, Input } from 'reactstrap';

export class ContactMe extends Component {
  render() {
    return (
      <div id="ContactMe" className="container py-5">
       <Fade bottom> <div className="d-flex justify-content-between align-items-start row m-0">
          <div className=" col-md-6 col-12 text-justify">
            <Title
              subTitle="ContactMe"
              title="Let me know if you want to talk 
              about a potential collaboration.
              I'm available for freelance work."
            />
          </div>
          <div className="col-md-6 col-12" >
            <a href="#" className="d-block subTitle text-start">
              infoname@mail.com
            </a>
          </div>
        </div></Fade>

       <Fade bottom>
       <Form>
          <FormGroup className="mt-3">
            <Input 
              type="input"
              name="input"
              id="input"
              placeholder="What’s your name?"
              className="input"
            />
          </FormGroup>
          <FormGroup className="mt-3">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="input"
            />
          </FormGroup>
          <FormGroup className="mt-3 boder-none">
            <Input
              type="input"
              id="input1"
              placeholder="Tell me about your project"
              className="input"
            />
          </FormGroup>
        </Form>
        <div className="container d-flex mt-3 px-4 justify-content-between aling-items-center">
          <Button title="Get a Quote" />
          <div>
            <FaArrowRight className="me-3 cursor" />
            <FaPaperclip className=" cursor" />
          </div>
        </div>
     
       </Fade>
      </div>
    );
  }
}

export default ContactMe;
