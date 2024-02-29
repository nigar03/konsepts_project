import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const PortfolioCard = ({ image, title, style,titleaz,styleaz }) => {
  const [lang]= useContext(LangContext);

  return (
    <div className="port col col-sm-12 col-md-4 my-4">
      <div className='portfolio-card'>
        <div className="portfolio-text mx-5 my-5">
          <h6 className='mx-1 my-1'>{lang==="az" ? titleaz :title}</h6>
          <p className='mx-1 my-1'>{lang==="az" ? styleaz :style}</p>
        </div>
        <Link to={'/getkonsept'}> <img src={image} alt="" onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }} />
        </Link>
      </div>
    </div>
  )
}

export default PortfolioCard