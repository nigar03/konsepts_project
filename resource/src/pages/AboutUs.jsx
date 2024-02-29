import React from 'react';
import SecSeven from '../components/SecSeven';
import SecFour from '../components/SecFour';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const AboutUs = () => {
  const [lang]= useContext(LangContext);

  return (
    <>
      <div className='aboutus'>
        <div className="main">
          <h1>{lang==="az"? "BİZİM HAQQIMIZDA" : "ABOUT US"}</h1>
        </div>
        <div className="container">
          <SecSeven />
          <SecFour />
          <Clients />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AboutUs