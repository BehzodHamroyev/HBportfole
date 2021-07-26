import React, { Component } from 'react';
import ClientsComponent from '../../components/ClientsComponent/ClientsComponent';
import Title from '../../components/Title/Title';
import clientImg1 from '../../img/client1.svg';
import clientImg2 from '../../img/client2.svg';
import clientImg3 from '../../img/client3.svg';
import clientImg4 from '../../img/client4.svg';
import clientImg5 from '../../img/client5.svg';
import Fade from 'react-reveal/Fade';
const data = [
  { img: clientImg1, color: '#FFF6FA', clientName: 'Slack' },
  { img: clientImg2, color: '#EDFFF5', clientName: 'Medium' },
  { img: clientImg3, color: '#F5FCFF', clientName: 'Microsoft' },
  { img: clientImg4, color: '#FFFBF2', clientName: 'Zeplin' },
  { img: clientImg5, color: '#F4FFED', clientName: 'Shopify' }
];
export class Clients extends Component {
  render() {
    return (
      <div id="Clients" className="Clients py-5 container">
      <Fade bottom>  <Title subTitle="Clients" title="Big Deal With" /></Fade>
      <Fade bottom>  <div className="row m-0 container d-flex justify-content-around">
       {data.map((v,i)=>{
           return( <ClientsComponent data={v} />)
       })}
          
        </div></Fade>
      </div>
    );
  }
}

export default Clients;
