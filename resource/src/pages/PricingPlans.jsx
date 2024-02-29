import React from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const PricingPlans = () => {
    const [lang]= useContext(LangContext);
    return (
        <div className='pricing-plans'>
            <div className="plans">
                <h1>{lang==="az" ? "QİYMƏT PLANLARI":"PRICING PLANS"}</h1>
            </div>
            <div className="container">
                <div className="pricing my-5">
                    <div className="basic">
                        <div className="px-4 py-5 my-5 text-center">
                            <h4 className=" text-body-emphasis">{lang==="az" ? "ƏSAS":"BASIC"}</h4>
                            <h3 className="text-body-emphasis my-3">$79</h3>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4">{lang==="az" ? "Həftə":"Week"}</p>
                                <p className="lead mb-4">{lang==="az" ? "Divar plakatlar Qablar $ Vazalar Qəhvə masalarıİbrik dəstləri ":" Wall posters Bowls $ Vases Coffee tables Ibrik sets"}</p>
                                <div className="buy-button d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4"><a href="/#">{lang==="az" ? "İndi al":"Buy Now"}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="premium">
                        <div className="px-4 py-5 my-5 text-center">
                            <h4 className="text-body-emphasis">{lang==="az" ? "PREMIUM":"PREMIUM"}</h4>
                            <h3 className="text-body-emphasis my-3">$299</h3>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4">{lang==="az" ? "Ay":"Month"}</p>
                                <p className="lead mb-4">{lang==="az" ? "Divar plakatlar Qablar $ Vazalar Qəhvə masalarıİbrik dəstləri":"Wall postersm Bowls $ Vases Coffee tables Ibrik sets"}</p>
                                <div className="buy-button d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4"><a href="/#">{lang==="az" ? "İndi al":"Buy Now"}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="business">
                        <div className="px-4 py-5 my-5 text-center">
                            <h4 className="text-body-emphasis">{lang==="az" ? "BİZNES ":"BUSINESS"}</h4>
                            <h3 className="text-body-emphasis my-3">$799</h3>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4">{lang==="az" ? "Il":"Year"}</p>
                                <p className="lead mb-4">{lang==="az" ? "Divar plakatlar Qablar $ Vazalar Qəhvə masalarıİbrik dəstləri":"Wall postersm Bowls $ Vases Coffee tables Ibrik sets"}
                                  </p>
                                <div className="buy-button d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4"><a href="/#">{lang==="az" ? "İndi al":"Buy Now"}</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Clients />
            </div>
            <Footer />
        </div>
    )
}

export default PricingPlans