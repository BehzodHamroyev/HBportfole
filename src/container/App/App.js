import React from 'react';
import './App.css';
import Navbar from '../navbar/Navbar'
import Home from '../Home/Home';
import ToDo from '../ToDo/ToDo';
import Portfolio from '../Portfolio/Portfolio';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ToDo />
      <Portfolio/>
      <Clients/>
      <Testimonials/>
      <Blog/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
