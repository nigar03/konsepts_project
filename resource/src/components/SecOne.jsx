import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const SecOne = () => {
  const [lang] = useContext(LangContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <div className='secone'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade ">
        <div className="carousel-inner">
          <div className="carousel-item active d-flex align-items-center justify-content-center"  >
            <div className="home text-center w-100 " data-aos="flip-up">
              <p className="display-5  text-light">{lang === 'az' ? 'Evinizi bəzəyin' : 'Adorn Your Home'}</p>
              <div className=" col-lg-6 mx-auto">
                <h1 className="mb-4 text-light">{lang === 'az' ? 'ƏL İŞİ İNTERYORLAR' : 'HANDMADE INTERIORS'}</h1>
                <div className="button d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link to={'getkonsept'} type="button" className="btn-konsept btn btn-outline-light btn-lg px-4 gap-3" >{lang === 'az' ? 'Konsept alın' : 'Get Konsept'}</Link>
                  <Link to={'getkonsept'} type="button" className="btn-konsept btn btn-outline-light btn-lg px-4" onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}>{lang === 'az' ? 'Daha çox oxu' : 'Read More'}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item  d-flex align-items-center justify-content-center" id='carousel-two'>
            <div className="home text-center w-100 " data-aos="fade-up">
              <p className="display-5 fw-bold text-light">{lang === 'az' ? 'Əl işini sevirik' : 'We Love Handmade '}</p>
              <div className=" col-lg-6 mx-auto">
                <h1 className="mb-4 text-light">{lang === 'az' ? 'DAXİLİ BƏZƏK' : 'INTERIOR DECORATION'} </h1>
                <div className="button d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link to={'/getkonsept'} type="button" className="btn-konsept btn btn-outline-light btn-lg px-4 gap-3">{lang === 'az' ? 'Konsept alın' : 'Get Konsept'}</Link>
                  <Link to={'/getkonsept'} type="button" className="btn-konsept btn btn-outline-light btn-lg px-4" onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}>{lang === 'az' ? 'Daha çox oxu' : 'Read More'}</Link>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item d-flex align-items-center justify-content-center" id='carousel-three'>
            <div className="home text-center w-100" data-aos="fade-up">
              <p className="display-5 fw-bold text-light">{lang === 'az' ? 'Özünə məxsus olun' : 'Make Uniquely Yours'}</p>
              <div className=" col-lg-6 mx-auto">
                <h1 className="mb-4 text-light">{lang === 'az' ? 'İSTİFADƏ EDİLMİŞ ELEMENTLƏR' : 'BESPOKE ELEMENTS'}</h1>
                <div className="button d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link to={'getkonsept'} type="button" className="btn-konsept btn btn-outline-light btn-lg px-4 gap-3">{lang === 'az' ? 'Konsept alın' : 'Get Konsept'}</Link>
                  <Link to={'getkonsept'} type="button" className="btn-konsept btn btn-outline-light btn-lg px-4" onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}>{lang === 'az' ? 'Daha çox oxu' : 'Read More'}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default SecOne