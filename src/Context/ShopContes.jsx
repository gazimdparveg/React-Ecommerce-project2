import React, { createContext, useState } from "react";
import Data from "../Components/Data/Pro_Data";  

export const Shopcontext = createContext("");

 

const Shopcontextproveder = (props)=>{
  const [data ] = useState(Data) 
  const [car , setcar]=useState([])
  
 

 

    return(

  <Shopcontext.Provider value={{data ,car , setcar}}>
   {props.children}
  </Shopcontext.Provider>

    )
}

export default Shopcontextproveder;
