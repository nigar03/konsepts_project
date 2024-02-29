import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const AboutMe = () => {
  const [lang]= useContext(LangContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <div className='aboutme'>
      <div className="container">
        <div className="nina">
          <div className="photo-me w-50" data-aos="fade-right">
            <div >
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/About-me-2.png" alt="" className='nina-one' />
            </div>
            <div data-aos="fade-right">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev2-img-4.png" alt="" className='nina-two' />
            </div>
            <div data-aos="fade-left">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/About-me-2.jpg" alt="" className='nina-four' />
            </div>
            <div data-aos="fade-right">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev2-img-1.jpg" alt="" className='nina-three' />
            </div>
            <div data-aos="fade-right">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/About-me-1.png" alt="" className='nina-five' />
            </div>
          </div>
          <div className="text-me" data-aos="fade-left" >
            <div className="text-name px-4 py-5 my-5 ">
              <h3 className="display-5 text-danger "  >{lang==="az"?"Mənim adım":"My name is"}</h3>
              <h1 className="display-5  text-body-emphasis ">NINA STIVEN</h1>
              <div className="mx-auto ">
                <p className="lead mb-4">{lang==="az"? "Nina Stiven yaradıcı uzaqgörəndir, özünün innovativ bədii axtarışları və ənənəvi sənət formalarının sərhədlərini aşmaq üçün sarsılmaz fədakarlığı ilə tanınır, dünyada saysız-hesabsız həvəskar rəssamları ruhlandırır." : "Nina Stiven is a creative visionary, known for her innovative artistic pursuits and unwavering dedication to pushing the boundaries of traditional art forms, inspiring countless aspiring artists worldwide."}</p>
                <p className='naaa'>
                  <a href="https://www.facebook.com/QodeInteractive/" className='text-decoration-none text-secondary mx-2'> <i className="fa-brands fa-facebook p-1 fs-5"></i></a>
                  <a href="https://www.instagram.com/qodeinteractive/" className='text-decoration-none text-secondary '> <i className="fa-brands fa-instagram fs-5 p-1"></i></a>
                  <a href="https://twitter.com/QodeInteractive" className='text-decoration-none text-secondary mx-2'> <i className="fa-brands fa-twitter fs-5 p-1"></i></a>
                  <a href="https://www.youtube.com/QodeInteractiveVideos" className='text-decoration-none text-secondary '> <i className="fa-brands fa-youtube fs-5 p-1"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe