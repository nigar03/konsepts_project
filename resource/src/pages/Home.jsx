import React from 'react';
import Footer from '../components/Footer';
import SecTwo from '../components/SecTwo';
import SecOne from '../components/SecOne';
import Cards from '../components/Cards';
import SecFour from '../components/SecFour';
import SecSix from '../components/SecSix';
import SecSeven from '../components/SecSeven';
import OnlineStore from '../components/OnlineStore';
import Clients from '../components/Clients';
import SecThree from '../components/SecThree';
const Home = () => {
  return (
    <div>
      <SecOne />
      <SecTwo />
      <SecThree />
      <Cards />
      <SecFour />
      <SecSix />
      <SecSeven />
      <OnlineStore />
      <Clients />
      {/* <NewSletter/> */}
      <Footer />
  
    </div>
  )
}

export default Home