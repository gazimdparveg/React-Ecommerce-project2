import React, { useContext } from 'react'
import Item from '../Components/Item/Item';
import { Shopcontext } from '../Context/ShopContes'; 

function ShopCatagory(props) {

  const {data } = useContext(Shopcontext);
  
   
 
  return (
    <div className=' relative container flex flex-col justify-center p-2 mx-auto sm:py-12   lg:flex-row lg:justify-between'>
     <section id="Projects"
    className="w-fit mx-auto   grid flex1 grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
     {
      data?.map((data)=>{
       
        if(data.category===props.Catagory){
          return <Item key={data.product_id} _id={data.product_id} Pro_img={data.image} Pro_cat={data.category} Pro_titile={data.name} Pro_price={data.price}  />
          
        }else{
         return null;
        }
        
       
      })
     
     }
   
  </section>
    </div>
  )
}

export default ShopCatagory
