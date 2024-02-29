import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const SecSix = () => {
  const [lang] = useContext(LangContext);
  return (
    <div className='secsix'>
      <div className="container">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4 my-5">
          <div className="col d-flex align-items-start">
            <div className="icon-square d-inline-flex align-items-center justify-content-center  flex-shrink-0 me-3">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_icons-2.png" alt="" width={50} />
            </div>
            <div>
              <h5 className=" text-light" style={{ fontWeight: '300', fontFamily: "sans-serif" }}>{lang === 'az' ? '24 SAAT XİDMƏT' : '24H SERVICE'}</h5>
              <Link to={'/getkonsept'} style={{ fontFamily: "cursive", color: 'white' }}>{lang === 'az' ? 'Daha çox məlumat' : 'More Info'}</Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square d-inline-flex align-items-center justify-content-center  flex-shrink-0 me-3">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_icons-3.png" width={50} alt="" />
            </div>
            <div>
              <h5 className=" text-light" style={{ fontWeight: '300', fontFamily: "sans-serif" }}>{lang === 'az' ? '24 SAAT XİDMƏT' : '24H SERVICE'}</h5>
              <Link to={'/getkonsept'} style={{ fontFamily: "cursive", color: 'white' }}>{lang === 'az' ? 'Daha çox məlumat' : 'More Info'}</Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square d-inline-flex align-items-center justify-content-center  flex-shrink-0 me-3">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_icons-4.png" width={50} alt="" />
            </div>
            <div>
              <h5 className=" text-light" style={{ fontWeight: '300', fontFamily: "sans-serif" }}>{lang === 'az' ? '24 SAAT XİDMƏT' : '24H SERVICE'}</h5>
              <Link to={'/getkonsept'} style={{ fontFamily: "cursive", color: 'white' }}>{lang === 'az' ? 'Daha çox məlumat' : 'More Info'}</Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square d-inline-flex align-items-center justify-content-center  flex-shrink-0 me-3">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_icons-1.png" width={50} alt="" />
            </div>
            <div>
              <h5 className=" text-light" style={{ fontWeight: '300', fontFamily: "sans-serif" }}>24H SERVICE</h5>
              <Link to={'/getkonsept'} style={{ fontFamily: "cursive", color: 'white' }}>More Info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecSix