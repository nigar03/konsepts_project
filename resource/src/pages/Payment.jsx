import React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';


const Payment = () => {
    const [lang] = useContext(LangContext);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();
    const [msg, setMsg] = useState({
        text: '',
        color: ''
    });

    const handleCardNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleCardNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCardExpiryChange = (e) => {
        setExpiry(e.target.value);
    };
    const handleCardCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!number || !name || !expiry || !cvv) {
            setMsg({
                text: 'Please,fill input',
                color: 'warning'
            })
        }
        else{
            navigate('/buy')

        }
        // else {
        //     if (number === payment.carddnumber && name === payment.cardname && expiry === payment.expiration && cvv === payment.cvv) {
        //         setMsg({
        //             text: <>
        //                 <ToastContainer
        //                     position="top-right"
        //                     autoClose={5000}
        //                     hideProgressBar
        //                     newestOnTop={false}
        //                     closeOnClick
        //                     rtl={false}
        //                     pauseOnFocusLoss
        //                     draggable
        //                     pauseOnHover
        //                     theme="dark" />
        //             </>,
        //         })

        //         localStorage.setItem('act', 'true');
        //         // window.location.reload();
        //     }
        //     else {
        //         setMsg({
        //             text: 'This card is not valid!',
        //             color: 'danger'
        //         })

        //     }
        // }


    }

    return (
        <div className="payment">
            <div className='container col col-sm-12 col-md-3'>
                <p style={{ width: "400px" }} className={`alert alert-${msg.color}`}>{msg.text}</p>
                <form className="needs-validation container" novalidate="" onSubmit={handleSubmit}>
                    <h4 className="mb-3">{lang==="az"? "Yoxla": "Checkout"}</h4>
                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" for="credit">{lang==="az"? "Kredit kartı": "Credit card"}</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" for="debit">{lang==="az"? "Debet kartı": "Debit card"}</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            <label className="form-check-label" for="paypal">{lang==="az"? "PayPal": "PayPal"}</label>
                        </div>
                    </div>
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label for="cc-name" className="form-label">{lang==="az"? "Kart üzərindəki ad": "Name on card"}</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required="" value={name} onChange={handleCardNameChange} />
                            <small className="text-body-secondary">{lang==="az"? "Kartda göstərildiyi kimi tam ad": "Full name as displayed on card"}</small>
                            <div className="invalid-feedback">
                            {lang==="az"? "Kartdakı ad tələb olunur": "Name on card is required"} 
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label for="cc-number" className="form-label">{lang==="az"? "Kredit kartı nömrəsi": "Credit card number"} </label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required="" value={number} onChange={handleCardNumberChange} />
                            <div className="invalid-feedback">
          {lang==="az"? "Kredit kartı nömrəsi tələb olunur": "Credit card number is required"}
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="cc-expiration" className="form-label">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" value={expiry} onChange={handleCardExpiryChange} />
                            <div className="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="cc-cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" value={cvv} onChange={handleCardCvvChange} />
                            <div className="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success my-3" type="submit" style={{ borderRadius: "0px", width: "100px" }} > Buy</button>
                </form>
            </div>
        </div>

    )
}

export default Payment