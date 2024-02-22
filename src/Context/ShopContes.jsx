import React, { createContext, useState } from "react";
import Data from "../Components/Data/Pro_Data"; 
import { useParams } from "react-router-dom";

export const Shopcontext = createContext("");

const addtocart = ()=>{
  let cart = {}
    for (let index = 0; index < Data.length+1; index++) {
         cart[index] = 0; 
    }
    return cart;
}

const Shopcontextproveder = (props)=>{
  const [data ] = useState(Data)
  const [carts, setcart  ] = useState(addtocart());
  
  const addcartpro = (itemid)=>{ 
    setcart((pre)=>({...pre,[itemid]:pre[itemid]+1}))
    console.log(carts)
    
  }

  const removecartpro = (itemid)=>{
    setcart((pre)=>({...pre,[itemid]:pre[itemid]-1}))
    console.log(carts);
  }

    return(

  <Shopcontext.Provider value={{data , carts,  addcartpro ,removecartpro}}>
   {props.children}
  </Shopcontext.Provider>

    )
}

export default Shopcontextproveder;
