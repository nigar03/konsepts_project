import React from 'react';
import { questiondata } from '../data/konsept';
import Footer from '../components/Footer';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const FagPage = () => {
  const [lang]= useContext(LangContext);
  return (
    <div className='fagpage'>
      <div className="fag">
        <h1>{lang==="az"?"TEZ-TEZ SORUŞULAN SUALLAR":"FAG PAGE"}</h1>
      </div>
      <div className="container">
        <div className="save-fag ">
          <div className="col col-sm-12 col-md-3 my-5">
            <p>{lang==="az"?"Ətrafımızı xilas etmək":"Saving our environment"}</p>
            <h5>{lang==="az"?"TEZ-TEZ SORUŞULAN SUALLAR":"FREQUENTLY ASKED QUESTIONS"}</h5>
            <ul className="nav row">
              <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">Call Us +123 456 987 {lang==="az"?"ya da bizi buraxın":"or drop us"} </a></li>
              <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 ">{lang==="az"?"ünvanına bir mesaj":"a message at"} konsept@example.com</a></li>
            </ul>
            <div className='customer-service my-4'>
              <h5>{lang==="az"?"MÜŞTƏRİ XİDMƏTLƏRİ":"CUSTOMER SERVICES"}</h5>
              <ul className="nav row">
                <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-body-secondary">{lang==="az"?"Mənim Hesabım":"My Account"}</a></li>
                <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-body-secondary">{lang==="az"?"Şirkət Siyasətləri və Prosedurları":"Company Policies & Procedures"}</a></li>
                <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-body-secondary">{lang==="az"?"Ödəniş Seçimləri":"Payment Options"}</a></li>
                <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-body-secondary">{lang==="az"?"Şərtlər və qaydalar":"Terms & Conditions"}</a></li>
                <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-body-secondary">{lang==="az"?"Necə daxil ola bilərəm":"How do I Login"}</a></li>
                <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-body-secondary">{lang==="az"?"Avropada Çatdırılma necə işləyir":"How Delivery works in Europe"}</a></li>
              </ul>
            </div>
          </div>
          <div className="col col-sm-12 col-md-9 my-5">
            {questiondata.map((item, count) => (
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={item.datatarget} aria-expanded="false" aria-controls="collapseOne">
                      {count + 1}. <span className='mx-2'> {lang==="az" ?item.questionaz:item.question}</span>
                    </button>
                  </h2>
                  <div id={item.id} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div className="accordion-body text-secondary">
                      {lang==="az"?item.answeraz:item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FagPage