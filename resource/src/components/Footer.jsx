import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [lang] = useContext(LangContext);

  return (
    <>
      <div className="footer ">
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 ">
            <div className="footer-page col mb-3">
              <h5 className=' mb-3'>{lang === 'az' ? 'ƏLAQƏ' : 'CONTACT'}</h5>
              <ul className="nav row ">
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0">+112 345 6789</Link></li>
                <li className="nav-item mb-2"><Link href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl" className="nav-link p-0 ">1316 Abbot Kinney Blvd.</Link></li>
                <li className="nav-item mb-2"><Link href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl" className="nav-link p-0 ">Copenhagen CA 90291</Link></li>
                <li className="nav-item mb-2 ">
                  <Link href="https://www.facebook.com/QodeInteractive/" className='text-decoration-none text-secondary '> <i className="fa-brands fa-facebook p-1 fs-5"></i></Link>
                  <Link href="https://www.instagram.com/qodeinteractive/" className='text-decoration-none text-secondary'> <i className="fa-brands fa-instagram fs-5 p-1"></i></Link>
                  <Link href="https://twitter.com/QodeInteractive" className='text-decoration-none text-secondary'> <i className="fa-brands fa-twitter fs-5 p-1"></i></Link>
                  <Link href="https://www.youtube.com/QodeInteractiveVideos" className='text-decoration-none text-secondary'> <i className="fa-brands fa-youtube fs-5 p-1"></i></Link>
                </li>
              </ul>
            </div>
            <div className="footer-page col mb-3">
              <h5 className=' mb-3'>{lang === 'az' ? 'YARDIM' : 'HELP'}</h5>
              <ul className="nav row">
                <li className="nav-item mb-2"><Link to={'/fagpage'} className="nav-link p-0 ">{lang === 'az' ? 'Tez-tez verilən suallar' : 'FAQs'}</Link></li>
                <li className="nav-item mb-2"><Link to={'/pricingplans'}  className="nav-link p-0 ">{lang === 'az' ? 'Qiymət Planları' : 'Pricing Plans'}</Link></li>
                <li className="nav-item mb-2"><a href='/#'  className="nav-link p-0 ">{lang === 'az' ? 'Iz' : 'Track'}</a></li>
                <li className="nav-item mb-3"><Link to={'/payment'} className="nav-link p-0 ">{lang === 'az' ? 'Sizin üçün' : 'Your Order'}</Link></li>
                <li className="nav-item mb-2"><Link to={'/myaccount'} className="nav-link p-0 ">{lang === 'az' ? 'Mənim Hesabım' : 'My Account'}</Link></li>
              </ul>
            </div>

            <div className="footer-page col mb-3 ">
              <h5 className=' mb-3'>{lang === 'az' ? 'BİZİM HAQQIMIZDA' : 'ABOUT US'}</h5>
              <ul className="nav row">
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'Bizim Hekayəmiz' : 'Our Story'}</Link></li>
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'İş imkanlar' : 'Job Opportunities'}</Link></li>
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'Mağaza Lokator' : 'Store Locator'}</Link></li>
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0">{lang === 'az' ? 'Bizimlə əlaqə saxlayın' : 'Contact Us'}</Link></li>
              </ul>
            </div>
            <div className="footer-page col mb-3">
              <h5 className='mb-3'>{lang === 'az' ? 'MÜŞTƏRİ XİDMƏTLƏRİ' : 'CUSTOMER SERVICE'}</h5>
              <ul className="nav row">
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'BİZİM HAQQIMIZDA' : 'My Account'}</Link></li>
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'Mənim Hesabım' : 'Terms of Use'}</Link></li>
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'Çatdırılma və Qaytarma' : 'Deliveries & Returns'}</Link></li>
                <li className="nav-item mb-2"><Link href="/#" className="nav-link p-0 ">{lang === 'az' ? 'Hədiyyə Kart' : 'Gift Card'}</Link></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
      <div className="visa container   my-4 ">
        <p style={{ color: ' #bdbcbc', fontFamily: " EB Garamond" }}>© 2020 Qode Interactive, All Rights Reserved</p>
        <ul className="list-unstyled ">
          <li className="ms-3"><Link className="link-body-emphasis" href="/#"><i className="fa-brands fa-cc-visa text-secondary fs-4"></i></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="/#"><i className="fa-brands fa-cc-paypal text-secondary fs-4"></i></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="/#"><i className="fa-brands fa-cc-discover text-secondary fs-4"></i></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="/#"><i className="fa-brands fa-cc-diners-club text-secondary fs-4"></i></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="/#"><i className="fa-brands fa-cc-amex text-secondary fs-4 "></i></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="/#"><i className="fa-brands  fa-cc-mastercard text-secondary fs-4"></i></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Footer