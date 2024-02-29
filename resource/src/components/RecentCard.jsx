import React from 'react';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const RecentCard = ({ photo, title, date ,titleaz}) => {
    const [lang] = useContext(LangContext);
    return (
        <div className="recent-card  d-flex align-items-center" style={{ width: '297px' }}>
            <img src={photo} alt="" width={74} height={90.92} className='my-2' />
            <div className="recent-text mx-2" style={{ width: '100px' }} >
                <h5 style={{ width: '200px' }}>{lang==="az"? titleaz:title}</h5>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default RecentCard