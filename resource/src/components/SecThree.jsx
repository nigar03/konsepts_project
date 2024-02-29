import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const SecThree = () => {
  const [lang]= useContext(LangContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <div className='secthree'>
      <div className="container">
        <div className="inspiration">
          <div className="photo-me w-50" data-aos="fade-up">
            <div >
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev2-img-3.png" alt="" className='nina-one' />
            </div>

            <div data-aos="fade-up">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev2-img-4.png" alt="" className='nina-two' />
            </div>

            <div data-aos="fade-up">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev2-img-2.jpg" alt="" className='nina-four' />
            </div>
            <div className='three-nina'>
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev2-img-1.jpg" alt="" className='nina-three' />
            </div>
            <div data-aos="fade-up">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/About-me-1.png" alt="" className='nina-five' />
            </div>
          </div>
          <div className="text-me" data-aos="fade-up">
            <div className="text-name px-4 py-5 my-5 ">
              <h3 className="display-5 text-light "  >{lang==="az" ? "İlham" :"Inspiration"}</h3>
              <h1 className="display-5  text-light ">{lang === "az" ? "FƏRQLİ DÜŞÜN" : "THINK DIFFERENT"}</h1>
              <div className="mx-auto ">
                <p className="lead mb-4 text-light">{lang=== "az"? "İlham yaradıcılığı alovlandıran qığılcımdır, qeyri-müəyyənliyin qaranlığında bələdçi işıqdır və bizə sarsılmaz ehtirasla arzularımızı həyata keçirməyə güc verən hərəkətverici qüvvədir." : "Inspiration is the spark that ignites creativity, a guiding light in the darkness of uncertainty, and the driving force that empowers us to pursue our dreams with unwavering passion."}</p>
                <button type="button" className="btn btn-outline-light btn-lg px-4">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecThree