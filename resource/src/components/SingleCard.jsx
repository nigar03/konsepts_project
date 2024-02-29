// import React, { useContext}  from 'react';
// import { LangContext } from '../context/LangContext';
import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const SingleCard = ({image, title, price, style, id,titleaz,styleaz }) => {
    const notify = () => toast.success("Product added to wishlist");
    const [lang]= useContext(LangContext);
    const konsepts = useSelector(p => p);
    const productdeails = konsepts.find(p => p.id.toString() === id);
    const { addWishlistItem , removeWishlistItem} = useWishlist();
    const [clicked, setClicked] = useState(false);
    const toggleHeart = () => {
        setClicked(!clicked)};
    return (
        <div className='col '>
            <div className="card my-3">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <p className="card-title">{lang === "az" ? titleaz : title}</p>
                        <p className="card-style">{lang === "az" ? styleaz : style}</p>
                    </div>
                    <i className="card-text" >${price}</i>
                </div>
            </div>
            <div className="hover-icon mx-3 my-3">
                <i className={clicked ? 'fa-solid fa-heart mx-2' : "fa-regular fa-heart mx-2"} style={{textDecoration:'none',color:"black"}} onClick={() => {clicked ?toggleHeart(removeWishlistItem(removeWishlistItem(id))):toggleHeart(notify(addWishlistItem(productdeails)))}}></i> 
                <Link to={`/store/${id}`} onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }}><i className="fa-regular fa-eye text-decoration-none text-dark"></i></Link>
                  <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark" />
            </div>
        </div>
    )
}

export default SingleCard;