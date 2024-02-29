import React from 'react';
import { useWishlist } from "react-use-wishlist";
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';



const Wishlist = () => {
    const [lang] = useContext(LangContext);
    const notify = () => toast.success("Product added to cart");
    const { addItem } = useCart();
    const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
    } = useWishlist();
   

    return (
        <div className='wishlist'>
            <div className="home-cart">
                <p>{lang==="az"? "Ev - İstək siyahısı":"Home-Wishlist"}</p>
            </div>
            <h1 className='text-center my-5' style={{ fontFamily: "cursive" }} >{lang==="az"? "İstək Siyahım":"My Wishlist "} ({totalWishlistItems})</h1>
            {isWishlistEmpty ? <>
                <div className="cart-page container my-5">
                    <div className='empty'>
                        <p className='mx-3 text-secondary'>{lang==="az"? "İstək siyahınız hazırda boşdur":"Your wishlist is currently empty"}</p>
                    </div>
                </div>
            </> : <div className='container my-5 '>
                <table className="table">
                    <thead>
                        <tr >
                            <th scope="col"></th>
                            <th scope="col">{lang==="az"? "ŞƏKİL":"IMAGE"}</th>
                            <th scope="col">{lang==="az"? "MƏHSUL":"PRODUCT"}</th>
                            <th scope="col">{lang==="az"? "QİYMƏT":"PRICE"}</th>
                            <th scope="col">{lang==="az"? "SƏHMƏT":"STOCK"}</th>
                            <th scope="col">{lang==="az"? "ƏLAVƏ EDİN":"ADD"}</th>
                        </tr>
                    </thead>
                    <tbody >
                        {items.map((item, count) => (
                            <tr key={count}>
                                <th scope="row" ><div className='remove' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><button className='btn btn-light' onClick={() => removeWishlistItem(item.id)}>X</button></div></th>
                                <td><img src={item.image} alt="" width={100} /></td>
                                <td ><div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>{lang==="az"? item.titleaz:item.name}</div></td>
                                <td><div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>${item.price}</div></td>
                                <td>
                                    <div className='item-name text-success' style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                    {lang==="az"? "Stokda":"In stock"}
                                    </div>
                                </td>
                                <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                    <div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "135px" }}  key={item.id}>
                                        <button className="btn btn-dark" onClick={() => { notify(addItem(item)) }}>{lang==="az"? "Səbətə əlavə et":"Add to Cart"}</button>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default Wishlist