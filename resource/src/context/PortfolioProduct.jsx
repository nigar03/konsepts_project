import { createContext, useState } from "react";
import {  portfoliodata } from "../data/konsept";


export const PortfolioContext= createContext();

export const  PortfolioProvider =({children})=>{
    const [portfolio,setPortfolio] = useState(portfoliodata);

    return <PortfolioContext.Provider value={[portfolio,setPortfolio]}>
        {children}

    </PortfolioContext.Provider>
}