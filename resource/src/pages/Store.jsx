import React, { useState } from 'react';
// import { storedata } from '../data/konsept';
import SingleCard from '../components/SingleCard';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';


const Store = () => {
    const [lang]= useContext(LangContext);
    const konsepts = useSelector(p => p);
    const [store, setStore] = useState([]);
    const [urunler, setUrunler] = useState([]);
    const [siralama, setSiralama] = useState("inc");
    const handleClick = (cat) => {
        const catData = konsepts.filter(p => p.category === cat);
        setStore(catData)
    };
    const sortInc = ()=>{
        const incData =konsepts.sort((a,b)=>a.price - b.price);
        setSiralama("inc");
        setUrunler(incData)
    };
    const sortDec =()=>{
        const decData =konsepts.sort((a,b)=>b.price - a.price);
        setSiralama("dec");
        setUrunler(decData);
    }

    return (
        <div className="store">
            <div className='container'>
                <div className="category ">
                    <div className="col col-sm-12 col-md-3 my-5">
                        <div className="cat-pro d-flex align-items-center justify-content-between">
                            <h6>{lang === "az" ? "KATEQORİYALAR" : "CATEGORIES"}</h6>
                            <button className='btn btn-dark  d-flex align-items-center justify-content-center my-1' style={{ width: "70px", height: '30px' }}><li className="list-group-item list-group-item-action text-ligh " onClick={() => {
                                handleClick({ store })
                            }} >{lang === "az" ? "Hamısı" : "All"}</li></button>
                        </div>
                        <ol className="list-group  list-group-numbered" >
                            <li className="list-group-item list-group-item-action text-secondary"
                                onClick={() => {
                                    handleClick("art")


                                }}>{lang==="az" ? "İncəsənət" : "Art"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('bedroom')

                            }}>{lang==="az" ? "Yataq otağı" : "Bedroom"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('chair')

                            }} >{lang==="az" ? "Kreslo" : "Chair"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('creative')

                            }}>{lang==="az" ? "Yaradıcı" : "Creative"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('decorative')

                            }}>{lang==="az" ? "Dekorativ" : "Decorative"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('kitchen')

                            }}>{lang==="az" ? "Kitchen" : "Kitchen"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('seedplant')

                            }}>{lang==="az" ? "Toxum Bitkisi" : "Seed Plant"}</li>
                            <li className="list-group-item list-group-item-action text-secondary" onClick={() => {
                                handleClick('smallspaces')

                            }}>{lang==="az" ? "Kiçik Məkanlar" : "Small Spaces"}</li>
                        </ol>
                        <div className='sort my-5'>
                          <div className="dropdown">
                                <a className="btn btn-dark dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {lang==="az" ? "Cür" : "Sort"} 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><p className="dropdown-item" onClick={sortInc} >{lang==="az" ? "Artan qiymət" : "Increasing price"} </p></li>
                                    <li><p className="dropdown-item" onClick={sortDec}> {lang==="az" ? "Qiymətin azalması" : " Decreasing price"}</p></li>
                                </ul>
                            </div>  
                        </div>

                        {/* <div className="store-image">
                   <img width={277} src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/06/shop_img1.jpg" alt="" className='my-5' />
                   </div> */}

                    </div>
                    <div className="store-card col col-sm-12 col-md-9 my-5 mx-5">
                        <div className="cat-card row g-5 ">
                            {store.length === 0  ? konsepts.map((item, count) => (
                                <SingleCard
                                    key={count}
                                    image={item?.image}
                                    title={item?.title}
                                    price={item?.price}
                                    id={item?.id}
                                    style={item?.style}
                                    titleaz={item.titleaz}
                                    styleaz={item.styleaz}
                                />
                            )) : store.map((item, count) => (
                                <SingleCard
                                    key={count}
                                    image={item?.image}
                                    title={item?.title}
                                    price={item?.price}
                                    id={item?.id}
                                    style={item?.style}
                                    titleaz={item.titleaz}
                                    styleaz={item.styleaz}
                                />
                            ))
                            },
                           {urunler.length === 0 ? konsepts.map((item, count) => (
                                <SingleCard
                                    key={count}
                                    image={item?.image}
                                    title={item?.title}
                                    price={item?.price}
                                    id={item?.id}
                                    style={item?.style}
                                    titleaz={item.titleaz}
                                    styleaz={item.styleaz}
                                />
                            )) : urunler.map((item, count) => (
                                <SingleCard
                                    key={count}
                                    image={item?.image}
                                    title={item?.title}
                                    price={item?.price}
                                    id={item?.id}
                                    style={item?.style}
                                    titleaz={item.titleaz}
                                    styleaz={item.styleaz}
                                />
                            ))
                            },

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}

export default Store