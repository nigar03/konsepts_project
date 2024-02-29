import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';
import RelatedCard from '../components/RelatedCard';
import { useSelector } from 'react-redux';



const Buy = () => {
    const konsepts = useSelector(p => p);
    const [lang] = useContext(LangContext);
  return (
    <>
    <div className='buy container d-flex align-items-center justify-content-center'>
        <div className='my-5' style={{width:'350px',height:'400px',borderRadius:"20px",border:"2px solid green"}}>
         <p className='text-center' ><img src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" alt="" width={200} /></p>
         <div className='my-5'>
         <p className='text-center fs-5'>{lang==="az"?"Uğurla yerinə yetirildi" :"Successfully accomplished"}</p>
         <div className='d-flex align-items-center justify-content-center'>
            <Link to="/store" type="button" class="return-btn btn btn-dark " style={{borderRadius:"0px"}}><a href="/#" style={{textDecoration:"none",color:"white",fontFamily:"cursive"}}>{lang==="az"? "Mağazaya qayıt" :"Return to Shop"}</a></Link>
          </div>
         </div>
        </div>     
    </div>
    <div className="container related-products my-5">
                <h3 className='text-center'>{lang==="az"?"TÖVSİYƏ EDİLƏN MƏHSULLAR":"RECOMMENDED PRODUCTS"}</h3>
                <div className="related-pro-card row g-5 my-3">
                        {konsepts.slice(-4).map(item=>(
                            <RelatedCard 
                            image={item.image}
                            key={item.id}
                            title={item.title}
                            style={item.style}
                            id={item.id}
                            price={item.price}
                            titleaz={item.titleaz}
                            styleaz={item.styleaz}
                            />
                        ))}
                    </div>
            </div>
    </>
  )
}

export default Buy