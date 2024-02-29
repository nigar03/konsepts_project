import React from 'react';
import { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { portfoliodata } from '../data/konsept';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const Portfolio = () => {
  const [lang]= useContext(LangContext);
  const [catProduct, setCatProduct] = useState([]);
  const handleClick = (sort) => {
    const sortData = portfoliodata.filter(p => p.sort === sort);
    setCatProduct(sortData)
  }

  return (
    <div className='portfolio'>
      <div className="portfolio-head">
        <p className='text-center'>{lang==="az" ? "Ev-Portfolio-Üç Sütun" : "Home-Portfolio-Three Columns"}</p>
      </div>
      <div className="sort my-5">
        <ul className='d-flex align-items-center justify-content-center'>
          <li onClick={() => { handleClick("showall") }} className='nav-item mx-3'>{lang==="az" ? "HAMISINI GÖSTƏR" : "SHOW ALL"}</li>
          <li onClick={() => { handleClick("art") }} className='nav-item mx-3'>{lang==="az" ? "İNCƏSƏNƏT" : "ART"}</li>
          <li onClick={() => { handleClick("eco") }} className='nav-item mx-3'>{lang==="az" ? "EKO" : "ECO"}</li>
          <li onClick={() => { handleClick("travel") }} className='nav-item mx-3'>{lang==="az" ? "SƏYAHƏT" : "TRAVEL"}</li>
        </ul>
      </div>
      <div className="container">
        <div className="port-card row">
          {catProduct.length === 0 ? portfoliodata.map((item, count) => (
            <PortfolioCard
              key={count}
              image={item.image}
              title={item.title}
              style={item.style}
              titleaz={item.titleaz}
              styleaz={item.styleaz}

            />
          )) : catProduct.map((item, count) => (
            <PortfolioCard
              key={count}
              image={item.image}
              title={item.title}
              style={item.style}
              titleaz={item.titleaz}
              styleaz={item.styleaz}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio