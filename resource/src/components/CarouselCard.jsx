import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from "react-use-wishlist";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const CarouselCard = ({ photo, title, price, style, id ,titleaz,styleaz}) => {
  const [lang]= useContext(LangContext);
  const konsepts = useSelector(p => p);
  const productdeails = konsepts.find(p => p.id.toString() === id);
  const { addWishlistItem , removeWishlistItem} = useWishlist();
  const [clicked, setClicked] = useState(false);
  const toggleHeart = () => {
      setClicked(!clicked)};
  return (
    <div className='sec-two-cards col ' >
      <div className="card-carousel" >
       <div className='card-img'><img src={photo} className="card-img-top" alt="" /></div>
        <div className="card-body-carousel d-flex justify-content-between">
          <div className='card-text'>
            <p className="card-title mx-3">{lang === "az" ? titleaz : title}</p>
            <p className="card-style mx-3">{lang === "az" ? styleaz : style}</p>
          </div>
          <i className="card-text" >${price}</i>
        </div>
      </div>
      <div className="hover-icon mx-3">
      <i className={clicked ? 'fa-solid fa-heart mx-2' : "fa-regular fa-heart mx-2"} style={{textDecoration:'none',color:"black"}} onClick={() => {clicked ?toggleHeart(removeWishlistItem(removeWishlistItem(id))):toggleHeart((addWishlistItem(productdeails)))}}></i> 
        <Link to={`/store/${id}`} className="fa-regular fa-eye text-decoration-none text-dark" onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }} ></Link>
      </div>
    </div>
  )
}

export default CarouselCard;