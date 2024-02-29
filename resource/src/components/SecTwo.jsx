import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselCard from './CarouselCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';



const SecTwo = () => {
  const [lang]= useContext(LangContext);
  const konsepts = useSelector(p => p);
  return (
    <div className="container">
      <div className="sectwo">
        <div className='sec-two my-5' >
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {konsepts.slice(0, 3).map(item => (
                <SwiperSlide key={item.id}>
                  <CarouselCard
                  photo={item.image}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  style={item.style}
                  key={item.id}
                  titleaz={item.titleaz}
                  styleaz={item.styleaz}
                />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='ceramics-blog'>
            <div className="ceramic-blog container">
              <div className='ceramic-text container'>
                <p>{lang==="az" ? "KERAMİKA BLOGU" : "CERAMICS BLOG"}</p>
                <Link to="/shopnow" className='shop' onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}>{lang==="az" ? "İndi alış-veriş edin": "Shop Now"}</Link>

                <p className='sale'>{lang ==="az" ? "25% endirim" : "-25%off"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='sec-two'>
          <div className='ceramics-blog-two'>
            <div className="ceramic-blog-two container">
              <div className='ceramic-text container'>
                <p>{lang==="az" ? "KERAMİKA BLOGU" : "CERAMICS BLOG"}</p>
                <Link to="/shopnow" className='shop' onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}>{lang==="az" ? "İndi alış-veriş edin": "Shop Now"}</Link>
                <p className='sale'>{lang ==="az" ? "50% endirim" : "-50%off"}</p>
              </div>
            </div>
          </div>
          <div >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper-two"
            >
              {konsepts.slice(3, 6).map(item => (
                <SwiperSlide key={item.id} > <CarouselCard
                  key={item.id}
                  photo={item.image}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  style={item.style}
                  titleaz={item.titleaz}
                  styleaz={item.styleaz}
                /> 
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecTwo