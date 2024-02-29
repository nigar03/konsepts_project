import React, { useEffect } from 'react';
import Aos  from 'aos';
import 'aos/dist/aos.css';


const SecFour = () => {
  useEffect(()=>{
    Aos.init({duration:2000});

  },[])  
  return (
    <div className='container'>
        <div className="secfour" data-aos="zoom-in" >
            <div  className="play">
                <a href="https://vimeo.com/117179035">Play</a>
             </div>
        </div>
  </div>
  )
}

export default SecFour