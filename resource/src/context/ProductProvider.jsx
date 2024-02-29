import { createContext, useState } from "react";
import {  storedata } from "../data/konsept";



export const ProductContext= createContext();

export const  ProductProvider =({children})=>{
    const [product,setProduct] = useState(storedata);

    return <ProductContext.Provider value={[product,setProduct]}>
        {children}

    </ProductContext.Provider>
}

