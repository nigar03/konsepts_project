import React from 'react';
import Footer from '../components/Footer';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const OurClients = () => {
  const [lang]= useContext(LangContext);
  return (
    <div className='ourclients'>
      <div className="brand">
        <h1>{lang==="az"?"Müştərilərimiz": "Our Clients"}</h1>
      </div>
      <div className="container">
        <div className="clients">
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-1.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-2.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-3.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-4.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/clients5b-1.png" alt="logo" /></span>
        </div>
        <div className="clients">
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-6.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-7.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-8.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-9.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-10.png" alt="logo" /></span>
        </div>
        <div className="clients">
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-11.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-12.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-13.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-14.png" alt="logo" /></span>
          <span><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Clients-15.png" alt="logo" /></span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OurClients