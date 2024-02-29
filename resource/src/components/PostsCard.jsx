import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';


const PostsCard = ({ one, two, three, date, title, about,titleaz,aboutaz }) => {
  const [lang]= useContext(LangContext);
  return (
    <div className='col'>
      <div className="post-card">
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
          <SwiperSlide><img src={one} alt="" /></SwiperSlide>
          <SwiperSlide><img src={two} alt="" /></SwiperSlide>
          <SwiperSlide><img src={three} alt="" /></SwiperSlide>
        </Swiper>
        <div className="card-body d-flex justify-content-between">
          <div className='my-4'>
            <p className="card-date">{date}</p>
            <p className="card-name text-dark">{lang==="az" ?titleaz :title}</p>
            <p className='about-card'>{lang==="az" ?aboutaz :about}</p>
            <Link to="/getkonsept" className='btn-card' onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}>{lang==="az" ? "Daha çox oxu" : "Read More"}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsCard