import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Magnifier from "react-glass-magnifier";
import { useSelector } from 'react-redux';
import { LangContext } from '../context/LangContext';
import { useWishlist } from 'react-use-wishlist';
import { useContext } from "react";

const ProductDetails = () => {
    const konsepts = useSelector(p => p);
    const notify = () => toast.success("Product added to cart");
    const { id } = useParams();
    const productdeails = konsepts.find(p => p.id.toString() === id);
    const { addItem } = useCart();
    const [activeImg, setActiveImage] = useState(productdeails.image);
    const { addWishlistItem , removeWishlistItem} = useWishlist();
    const [lang] = useContext(LangContext);
    const [clicked, setClicked] = useState(false);
    const toggleHeart = () => {
        setClicked(!clicked)};

    return (
        <div className="details-page">
            <div className="sort">
                <p>Home-</p>
                <p> {productdeails.style}-</p>
                <p> {productdeails.name}</p>
            </div>
            <div className='read-more container '>
                <div className="detail-image  my-5 py-5 ">
                    <div className="detail-image-one ">
                        <div className="detail-img my-2" >
                            <img src={productdeails.imageone} alt="" onClick={() => setActiveImage(productdeails.imageone)} />
                        </div>
                        <div className="detail-img  my-2">

                            <img src={productdeails.imagetwo} alt="" onClick={() => setActiveImage(productdeails.imagetwo)} />
                        </div>
                        <div className="detail-img  my-2">
                            <img src={productdeails.imagethree} alt="" onClick={() => setActiveImage(productdeails.imagethree)} />
                        </div>
                        <div className="detail-img  my-2">
                            <img src={productdeails.imagefour} alt="" onClick={() => setActiveImage(productdeails.imagefour)} />
                        </div>
                    </div>
                    <div className="detail-image-two">
                        <Magnifier
                            imageUrl={activeImg}
                            imgAlt={activeImg}
                            zoomFactor={1.5}
                            glassDimension={200}
                            largeImageUrl={activeImg}
                            glassBorderColor="white"
                            glassBorderWidth={2}
                        />
                    </div>
                </div>
                <div className="detail-text   px-5  my-5">
                    <div className="detail-title text-center">
                        <h1 className="text-start">{lang==="az"?productdeails.titleaz:productdeails.title}</h1>
                        <div className=" mx-auto ">
                            <p className="detail-price lead mb-4 text-start">${productdeails.price}</p>
                            <p className=" detail-star lead mb-4 text-start"><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star text-secondary"></i></p>
                            <p className="detail-des  mb-4 text-start">{lang==="az"?productdeails.descaz:productdeails.description}</p>
                            <div className="detail-btn d-grid gap-2 d-sm-flex justify-content-sm-start" key={productdeails.id}>
                                <button type="button" className="btn btn-outline-dark px-4 " onClick={() => { notify(addItem(productdeails)) }}>{lang==="az"? "Səbətə əlavə et":"Add To Cart"}</button>
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
                            <p className="detail-type mb-4 text-start my-3"> <i className={clicked ? 'fa-solid fa-heart mx-2' : "fa-regular fa-heart mx-2"} style={{textDecoration:'none',color:"black"}} onClick={() => {clicked ?toggleHeart(removeWishlistItem(removeWishlistItem(id))):toggleHeart(notify(addWishlistItem(productdeails)))}}></i> {clicked  ? 'Product added' : 'Add to wishlist'} </p>
                            <p className="detail-type mb-4 text-start">SKU: <span className='text-secondary'>{productdeails.sku}</span></p>
                            <p className="detail-type mb-4 text-start">{lang==="az"?"KATEQORİYALAR":"CATEGORIES:"} <span className='text-secondary'>{lang==="az"?productdeails.styleaz:productdeails.style}</span></p>
                            <p className="detail-type mb-4 text-start">{lang==="az"?"ETİKETLER" :"TAGS:"} <span className='text-secondary'>{lang==="az"?productdeails.tagaz:productdeails.tags}</span></p>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer />
        </div>

    )
}

export default ProductDetails