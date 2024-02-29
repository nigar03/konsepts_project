import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const RelatedCard = ({ image, title, price, style, id ,titleaz,styleaz}) => {
    const [lang] = useContext(LangContext);
  return (
    <div className='col col-sm-12 col-md-3'>
      <div className="card my-3">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <p className="card-title">{lang==="az"? titleaz:title}</p>
                        <p className="card-style">{lang==="az"? styleaz:style}</p>
                    </div>
                    <i className="card-text" >${price}</i>
                </div>
            </div>
            <div className="hover-icon mx-3">
                <i className="fa-regular fa-heart mx-2"></i>
                <Link to={`/store/${id}`} onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }}><i className="fa-regular fa-eye text-decoration-none text-dark"></i></Link>
            </div>


    </div>
  )
}

export default RelatedCard