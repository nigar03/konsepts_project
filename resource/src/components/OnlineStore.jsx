import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { LangContext } from '../context/LangContext';
import React, { useContext } from 'react';

const OnlineStore = () => {
  const [lang] = useContext(LangContext);
  return (
    <>
      <div className="online-store">
        <div className='container'>
          <div className="online-text " >
            <p>{lang === "az" ? 'Premium Dizaynlar' : 'Premium Designs'}</p>
            <h2>{lang === "az" ? 'ONLİNE MAĞAZA' : 'ONLINE STORE'}</h2>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              960: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="swiperfour"
          >
            <SwiperSlide><img width={329} src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home1_1-1-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/slider_featured_90-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/06/slider_featured_30-4-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shopslider_40-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/06/slider_featured_60-2-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/07/slider_featured_70-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/slider_featured_80-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/slider_featured_4-600x600.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img width={329} src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shopslider_40-600x600.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="free-shipping">
        <div className="container">
          <h3 className='text-light'>{lang === "az" ? '75$+ qiymətinə pulsuz çatdırılma' : 'Free Shipping On $75+'}</h3>
        </div>
      </div>
    </>
  )
}

export default OnlineStore