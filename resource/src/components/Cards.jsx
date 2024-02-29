import React, { useContext } from 'react';
import SingleCard from './SingleCard';
import { LangContext } from '../context/LangContext';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Cards = () => {
  const konsepts = useSelector(p => p);
  const [lang] = useContext(LangContext);
  return (
    <div className="cards p-5">
      <div className='container'>
        <h5 className='text-center'>{lang === 'az' ? 'Yay Kolleksiyası' : 'Summer Collection'}</h5>
        <h3 className='text-center p-3' >{lang === 'az' ? 'MINIMAL və SADƏ DİZAYN' : 'MINIMAL & SIMPLE DESIGN'}</h3>
        <div className="konsept-card my-5 ">
          {konsepts.slice(31,36).map((item, count) => (
            <SingleCard
              image={item.image}
              title={item.title}
              price={item.price}
              id={item.id}
              style={item.style}
              key={count}
              titleaz={item.titleaz}
              styleaz={item.styleaz}
            />
          ))}
        </div>
        <div className="konsept-card  mt-4">
          {konsepts.slice(5, 10).map((item, count) => (
            <SingleCard
              image={item.image}
              title={item.title}
              price={item.price}
              id={item.id}
              style={item.style}
              key={count}
              titleaz={item.titleaz}
              styleaz={item.styleaz}
            />
          ))}
        </div>
        <div className='slider-card'>
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
              {konsepts.slice(28, 33).map(item => (
                <SwiperSlide key={item.id}><SingleCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  style={item.style}
                  key={item.id}
                />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </div>
  )
}

export default Cards