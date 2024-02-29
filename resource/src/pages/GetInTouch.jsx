import React from 'react';
import Footer from '../components/Footer';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const GetInTouch = () => {
  const [lang]= useContext(LangContext);
  return (
    <div className='getintouch'>
      <div className="map">
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17826.699115195894!2d-118.47613425775336!3d33.9920469744332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2babf5d20d6c5%3A0xcccacac2db1edcd9!2zMTMxNiBBYmJvdCBLaW5uZXkgQmx2ZCwgVmVuaWNlLCBDQSA5MDI5MSwgQW1lcmlrYSBCaXJsyZnFn21pxZ8gxZ50YXRsYXLEsQ!5e0!3m2!1saz!2saz!4v1695059863015!5m2!1saz!2saz" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div className="container ">
        <div className="contact my-5 py-5 ">
          <div className="question ">
            <p className='fs-5'>{lang==="az"?"Bizimlə əlaqə saxlayın":"Contact Us"}</p>
            <h2>{lang==="az"? "SUALINIZ VAR?" : "GOT ANY QUESTIONS?"}</h2>
            <p className='fs-5'>{lang==="az"? "Çünki nə nifrətdən yurdun müəllifi, nə də zinət kinindən. Amma bu sahədə futbola cavabdeh olduğu onun həyatı deyildi." :"Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit."}</p>
            <div className="office d-flex  w-50">
              <div className="col-6 col-md-2 mb-3 w-100">
                <h5 className='text-start my-3'>{lang==="az"? "OFİS":"OFFICE"}</h5>
                <ul className="nav row">
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">1316 Abbot Kinney Blvd.</a></li>
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">Copenhagen CA 90291</a></li>
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">+112 345 6789</a></li>
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">konsept@example.com</a></li>
                  <li className="nav-item mb-2"> <a href="https://www.facebook.com/QodeInteractive/" className='text-decoration-none text-secondary'> <i className="fa-brands fa-facebook fs-5"></i></a>
                    <a href="https://www.instagram.com/qodeinteractive/" className='text-decoration-none text-secondary'> <i className="fa-brands fa-instagram fs-5"></i></a>
                    <a href="https://twitter.com/QodeInteractive" className='text-decoration-none text-secondary'> <i className="fa-brands fa-twitter fs-5 "></i></a>
                    <a href="https://www.youtube.com/QodeInteractiveVideos" className='text-decoration-none text-secondary'> <i className="fa-brands fa-youtube fs-5"></i></a></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3 w-100">
                <h5 className='text-start my-3'>{lang==="az"? "MAĞAZA":"STORE"}</h5>
                <ul className="nav row">
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">1316 Abbot Kinney Blvd.</a></li>
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">Copenhagen CA 90291</a></li>
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">+112 345 6789</a></li>
                  <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">konsept@example.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="send-question ">
            <form >
              <div className='d-flex'>
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={lang==="az"? "Ad":"Name"} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control mx-3" id="exampleInputPassword1" placeholder='Email' />
                </div>
              </div>
              <div className='comment'>
                <textarea type="text" className="form-control text-start" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={lang==="az"? "Şərh":"Comment"} />
              </div>
            </form>
            <div className='d-flex align-items-center justify-content-end'>
              <button type="button" className="btn btn-outline-dark my-3">{lang==="az"?"Göndər":"Send"}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GetInTouch