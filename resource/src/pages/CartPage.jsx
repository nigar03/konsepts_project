import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const CartPage = () => {
  const { items, updateItemQuantity, removeItem, isEmpty, cartTotal } = useCart();
  const [lang] = useContext(LangContext);
  return (
   <div style={{height:"130vh"}}>
     <div className="home-cart">
        <p>{lang==="az"? "Ev-Səbəti" :"Home-Cart"}</p>
      </div>
      {isEmpty ? <>
        <div className="cart-page container my-5">
          <div className='empty'>
            <p className='mx-3 text-secondary'>{lang==="az"? "Səbətiniz hazırda boşdur" :"Your cart is currently empty"}</p>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <Link to="/store" type="button" class="return-btn btn btn-dark my-5 "><a href="/#">{lang==="az"? "Mağazaya qayıt" :"Return to Shop"}</a></Link>
          </div>
        </div>
      </> : <div className='container my-5 '>
        <table className="table">
          <thead>
            <tr >
              <th scope="col"></th>
              <th scope="col ">{lang==="az"? "ŞƏKİL" :"IMAGE"}</th>
              <th scope="col ">{lang==="az"? "MƏHSUL" :"PRODUCT"}</th>
              <th scope="col">{lang==="az"? "QİYMƏT" :"PRICE"}</th>
              <th scope="col">{lang==="az"? "KƏMİYYƏT" :"QUANTITY"}</th>
              <th scope="col">{lang==="az"? "ARA CƏM" :"SUBTOTAL"}</th>
            </tr>
          </thead>
          <tbody >
            {items.map((item, count) => (
              <tr key={count}>
                <th scope="row" ><div className='remove' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><button className='btn btn-light' onClick={() => removeItem(item.id)}>X</button></div></th>
                <td><img src={item.image} alt="" width={100} /></td>
                <td ><div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{lang==="az"? item.titleaz:item.name}</div></td>
                <td><div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>${item.price}</div></td>
                <td>
                  <div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='btn btn-dark d-flex align-items-center justify-content-between' style={{ width: '90px' }} >
                      <span onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</span>
                      <span>{item.quantity} </span>
                      <span onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='item-name' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >${item.price * item.quantity}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <ul className="list-group list-group-flush my-5">
            <li className="list-group-item w-100 fs-3">{lang==="az"? "SƏBƏTIN CƏMİ":"CART TOTALS"}</li>
            <li className="list-group-item w-100 fs-5">{lang==="az"? "Ümumi qiymət":"Total Price "}: ${cartTotal}</li>
            <li className="list-group-item w-100">
            {localStorage.getItem('active')=== "nigar.baxshiyeva@gmail.com" ?
            <>
               <Link to={'/payment'}  className='btn btn-warning checkout-btn'>{lang==="az"? "Yoxla":"Checkout"}</Link> 
            </> 
            :
            <>
               <Link to={'/login'}  className='btn btn-warning checkout-btn'>{lang==="az"? "Yoxla":"Checkout"}</Link> 
             </>
            }
          
            {localStorage.getItem('active')=== "nigar.baxshiyeva@gmail.com" ?
            <>
            <Link to={'/payment'} className='btn btn-success ms-3 buy'>{lang==="az"? "Al":"Buy"}</Link>
            </> 
            :
            <>
              <Link to={'/login'} className='btn btn-success ms-3 buy'>{lang==="az"? "Al":"Buy"}</Link>
             </>
            }
            
            </li>
          </ul>
        </div>
      </div>}
   </div>
  )
}

export default CartPage