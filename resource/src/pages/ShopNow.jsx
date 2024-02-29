import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Footer from '../components/Footer';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';


const ShopNow = () => {
  const [lang] = useContext(LangContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });

  }, [])
  return (
    <div className='shopnow'>
      <div className="shop">

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
          <SwiperSlide className='shopnow-one' >
            <div className="d-flex align-items-center justify-content-between container">
              <div className='shop-text ' data-aos="fade-up">
                <div className="px-4 py-5 my-5 text-start">
                  <h1 className="fw-bold text-body-emphasis ">{lang==="az"? "MINIMAL VƏ SADƏ":"MINIMAL & SIMPLE"}</h1>
                  <div className="mx-auto">
                    <p className="text-secondary">{lang==="az"? "Minimal və sadə dizayn prinsiplərini özündə cəmləşdirən otaq təmiz xətləri, sönük rəngləri və səliqəsiz atmosferi ilə sakitlik bəxş edir.":"Embracing minimal and simple design principles, the room exudes tranquility with its clean lines, muted colors, and uncluttered ambiance."}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
                      <button type="button" className="btn btn-outline-dark btn-lg px-4"><Link to={'/blog'}>{lang==="az"? "Konsept alın":"Get Konsept"}</Link></button>
                      <button type="button" className="btn btn-lg px-4"><Link to={'/blog'}>{lang==="az"?"Daha çox oxu":"Read More"}</Link></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='shop-photo-one d-flex align-items-center justify-content-between' data-aos="fade-down">
                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home-3-rev-img-1.png" alt="" />
                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home-3-rev-img-2.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shopnow-two'>
            <div className="d-flex align-items-center justify-content-between container">
              <div className='shop-text w-75' data-aos="fade-up">
                <div className="px-4 py-5 my-5 text-start">
                  <h1 className="fw-bold text-body-emphasis ">{lang==="az"? "EVALİ VƏ TƏMİZ":"FLEXIBLE & CLEAN"}</h1>
                  <div className="mx-auto">
                    <p className="text-secondary">{lang==="az"? "Çevik iş sahəsi səmərəliliyi və diqqəti təşviq edən təmiz və mütəşəkkil bir mühiti qoruyarkən yaradıcılığı və əməkdaşlığı təşviq edir.":"The flexible workspace fosters creativity and collaboration while maintaining a clean and organized environment that promotes efficiency and focus."}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
                      <button type="button" className="btn btn-outline-dark btn-lg px-4"><Link to={'/blog'}>{lang==="az"? "Konsept alın":"Get Konsept"}</Link></button>
                      <button type="button" className="btn btn-lg px-4"><Link to={'/blog'}>{lang==="az"?"Daha çox oxu":"Read More"}</Link></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-photo-two" data-aos="fade-down">
                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/Home3_rev-4.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shopnow-three'>
            <div className="d-flex align-items-center justify-content-between container">
              <div className='shop-text w-75' data-aos="fade-up">
                <div className="px-4 py-5 my-5 text-start">
                  <h1 className="fw-bold text-body-emphasis ">{lang==="az"? "KLASSİK VƏ VAXTSIZ":"CLASSIC & TIMELESS"}</h1>
                  <div className="mx-auto">
                    <p className="text-secondary">{lang==="az"? "Qara qalstuklu geyimin klassik və zamansız zərifliyi əsrlər boyu tendensiyaları aşan və incəliyi təcəssüm etdirən uzunmüddətli təəssürat yaratdı.":"The classic and timeless elegance of the black-tie attire left a lasting impression, transcending trends and epitomizing sophistication through the ages."}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
                      <button type="button" className="btn btn-outline-dark btn-lg px-4"><Link to={'/blog'}>{lang==="az"? "Konsept alın":"Get Konsept"}</Link></button>
                      <button type="button" className="btn btn-lg px-4"><Link to={'/blog'}>{lang==="az"?"Daha çox oxu":"Read More"}</Link></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-photo-three" data-aos="fade-down">
                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/Home3_rev-3-1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mix-product">
        <div className="total-one">
          <div className="first" to={'/store'} data-aos="flip-left">
            <div className="container pro-text d-flex align-items-center justify-content-between">
              <div className='my-5 mx-3'>
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "KAKTUSLAR":"CACTI"}</Link>
                <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Dekorativ":"Decorative"}</p>
              </div>
              <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$20.00</p></div>
            </div>
          </div>
          <div className="second">
            <div className="clock" data-aos="flip-right">
              <div className="container pro-text d-flex align-items-center justify-content-between">
                <div className='my-5 mx-3'>
                  <Link onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "DİVAR SAATI":"WALL CLOCK"}</Link>
                  <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Interyer":"Interior"}</p>
                </div>
                <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$15.00</p></div>
              </div>
            </div>
            <div className="lamp" data-aos="flip-right">
              <div className="container pro-text d-flex align-items-center justify-content-between">
                <div className='my-5 mx-3'>
                  <Link onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "BOHO LAMPA":"BOHO LAMP"}</Link>
                  <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Yaradıcı":"Creative"}</p>
                </div>
                <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$20.00</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="total-two">
          <div className="second">
            <div className="plate" data-aos="flip-left"> <div className="container pro-text d-flex align-items-center justify-content-between">
              <div className='my-5 mx-3'>
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "AĞAÇ BOSQAB":"WOOD PLATE"}</Link>
                <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Yaradıcı":"Creative"}</p>
              </div>
              <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$23.00</p></div>
            </div></div>
            <div className="pot" data-aos="flip-left"> <div className="container pro-text d-flex align-items-center justify-content-between">
              <div className='my-5 mx-3'>
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "ÇAYDAN":"TEA POT"}</Link>
                <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Yaradıcı":"Creative"}</p>
              </div>
              <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$20.00</p></div>
            </div>
            </div>
          </div>
          <div className="first" to={'/store'} data-aos="flip-right">
            <div className="container pro-text d-flex align-items-center justify-content-between">
              <div className='my-5 mx-3'>
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "Ağac Kreslo":"WOOD CHAIR"}</Link>
                <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Kreslo":"Chair"}</p>
              </div>
              <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$55.00</p></div>
            </div>
          </div>
        </div>
        <div className="total-three">
          <div className="first" to={'/store'} data-aos="flip-left">
            <div className="container pro-text d-flex align-items-center justify-content-between">
              <div className='my-5 mx-3'>
                <Link onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "DAXİLİ LAMPA":"INTERIOR LAMP"}</Link>
                <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Yaradıcı":"Creative"}</p>
              </div>
              <div className='my-5 mx-3 fs-3'><p style={{ color: "black", fontFamily: "cursive" }}>$85.00</p></div>
            </div>
          </div>
          <div className="second">
            <div className="light" data-aos="flip-right">
              <div className="container pro-text d-flex align-items-center justify-content-between">
                <div className='my-5 mx-3'>
                  <Link onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "NARINCI İŞIQ":"ORANGE LIGHT"}</Link>
                  <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Dekorativ":"Decorative"}</p>
                </div>
                <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$35.00</p></div>
              </div>
            </div>
            <div className="basket" data-aos="flip-right">
              <div className="container pro-text d-flex align-items-center justify-content-between">
                <div className='my-5 mx-3'>
                  <Link onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }} className='fs-5' style={{ fontFamily: "initial", color: "black", textDecoration: "none" }} to={'/store'}>{lang==="az"? "AĞAC SƏBƏT":"WOOD BASKET"}</Link>
                  <p className='fs-5 text-secondary' style={{ fontFamily: "initial" }}>{lang==="az"? "Yaradıcı":"Creative"}</p>
                </div>
                <div className='my-5 mx-3 fs-3' ><p style={{ color: "black", fontFamily: "cursive" }}>$20.00</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShopNow;