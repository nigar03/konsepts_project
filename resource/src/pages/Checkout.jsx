// import React from 'react';
// import { useCart } from 'react-use-cart';
// import { Link } from 'react-router-dom';


// const Checkout = () => {
//     const { cartTotal } = useCart();
//     return (
//         <div className="checkout">
//             <div className='container'>
//                 <div className="row">
//                     <div className="col col-sm-12 col-md-9 my-4">
//                         <h4 className="mb-3">Checkout</h4>
//                         <form className="needs-validation" novalidate="">
//                             <div className="row g-3">
//                                 <div className="col-sm-6">
//                                     <label for="firstName" className="form-label">First name</label>
//                                     <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
//                                     <div className="invalid-feedback">
//                                         Valid first name is required.
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <label for="lastName" className="form-label">Last name</label>
//                                     <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
//                                     <div className="invalid-feedback">
//                                         Valid last name is required.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label for="username" className="form-label">Username</label>
//                                     <div className="input-group has-validation">
//                                         <span className="input-group-text">@</span>
//                                         <input type="text" className="form-control" id="username" placeholder="Username" required="" />
//                                         <div className="invalid-feedback">
//                                             Your username is required.
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
//                                     <input type="email" className="form-control" id="email" placeholder="you@example.com" />
//                                     <div className="invalid-feedback">
//                                         Please enter a valid email address for shipping updates.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label for="address" className="form-label">Address</label>
//                                     <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
//                                     <div className="invalid-feedback">
//                                         Please enter your shipping address.
//                                     </div>
//                                 </div>

//                                 <div className="col-12">
//                                     <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
//                                     <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
//                                 </div>

//                                 <div className="col-md-5">
//                                     <label for="country" className="form-label">Country</label>
//                                     <select className="form-select" id="country" required="">
//                                         <option value="">Choose...</option>
//                                         <option>United States</option>
//                                     </select>
//                                     <div className="invalid-feedback">
//                                         Please select a valid country.
//                                     </div>
//                                 </div>

//                                 <div className="col-md-4">
//                                     <label for="state" className="form-label">State</label>
//                                     <select className="form-select" id="state" required="">
//                                         <option value="">Choose...</option>
//                                         <option>California</option>
//                                     </select>
//                                     <div className="invalid-feedback">
//                                         Please provide a valid state.
//                                     </div>
//                                 </div>

//                                 <div className="col-md-3">
//                                     <label for="zip" className="form-label">Zip</label>
//                                     <input type="text" className="form-control" id="zip" placeholder="" required="" />
//                                     <div className="invalid-feedback">
//                                         Zip code required.
//                                     </div>
//                                 </div>
//                             </div>

//                             <hr className="my-4" />


//                             <hr className="my-4" />
//                         </form>
//                     </div>
//                     <div className="col col-sm-12 col-md-3 my-5">
//                         <div className="total" >
//                             <ul className="list-group list-group-flush my-5">
//                                 <li className="list-group-item w-100 fs-3">CART TOTALS</li>
//                                 <li className="list-group-item w-100 fs-5">Total Price : ${cartTotal}</li>
//                                 <li className="list-group-item w-100">
//                                     <Link to={'/payment'}  className='btn btn-success buy'>Place Order</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Checkout