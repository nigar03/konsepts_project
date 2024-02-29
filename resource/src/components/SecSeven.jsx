import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const SecSeven = () => {
  const [lang] = useContext(LangContext);
  return (
    <div className="secseven my-5 p-5">
      <div className='container '>
        <h5 className='text-center'>{lang === 'az' ? 'Məsləhətlərin gündəlik dozası' : 'Daily Dose of Tips'}</h5>
        <h3 className='text-center'>{lang === 'az' ? 'BLOĞUMUZU OXUYUN' : 'READ OUR BLOG'}</h3>
        <div className="row g-5 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogMasonary-1.jpg" alt="" />
            </div>
            <p className='plates'>{lang === 'az' ? 'Masalar, Divar lövhələri -27 mart 2020-ci il' : 'Tables, Wall Plates -March 27, 2020'}</p>
            <h3 className="seven-text">{lang === 'az' ? 'BİR YER DÜŞÜNÜLMƏK' : 'THINKING OF A PLACE'}</h3>
            <p className='lorem'>Lorem ipsum dolor sit amet, debet consulatu ne vix, vel ut iusto postea, hinc choro per id. Vide</p>
            <Link to={'/getkonsept'} className="read-more">
              {lang === 'az' ? 'Daha çox oxu' : '  Read More'}
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogMasonary-2.jpg" alt="" />
            </div>
            <p className='plates'> {lang === 'az' ? 'Divar lövhələri-9 aprel 2020-ci il' : 'Wall Plates-April 9, 2020'}</p>
            <h3 className="seven-text"> {lang === 'az' ? 'MÜKƏMMƏL Bəzək' : 'PERFECT DECORATION'}</h3>
            <p className='lorem'>In fugit possit vis, sonet laudem albucius vel ea. Nulla saperet scripserit te cum. Pri adhuc cop</p>
            <Link to={'/getkonsept'} className="read-more">
              {lang === 'az' ? 'Daha çox oxu' : '  Read More'}
            </Link>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
              <img src="	https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogMasonary-3.jpg" alt="" />
            </div>
            <p className='plates'> {lang === 'az' ? 'Divar lövhələri-9 aprel 2020-ci il' : 'Wall Plates-April 9, 2020'}</p>
            <h3 className=" even-text"> {lang === 'az' ? 'İNTERYER DİZAYN ÜSLUB' : 'INTERIOR DESIGN STYLE'}</h3>
            <p className='lorem'>Lorem ipsum dolor sit amet, debet consulatu ne vix, vel ut iusto postea, hinc choro per id. Vide</p>
            <Link to={'/getkonsept'} className="read-more">
              {lang === 'az' ? 'Daha çox oxu' : '  Read More'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecSeven