import React from 'react';
import TeamCard from '../components/TeamCard';
import { team } from '../data/konsept'
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';


const OurTeam = () => {
    const [lang]= useContext(LangContext);
    useEffect(() => {
        Aos.init({ duration: 1000 });

    }, []);
    return (
        <div className='ourteam'>
            <div className="team" data-aos="flip-up">
                <h1 data-aos="fade-up">{lang==="az" ? "BİZİM KOMANDA" : "OUR TEAM"}</h1>
            </div>
            <div className="team-bg">
                <div className="container">
                    <div className="card-one row ">
                        <div className="card-two col col-sm-12 my-5">
                            <div className="card-three row g-5 my-5">
                                {team.map(item => (
                                    <TeamCard
                                        key={item.id}
                                        photo={item.image}
                                        title={item.title}
                                        job={item.job}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam