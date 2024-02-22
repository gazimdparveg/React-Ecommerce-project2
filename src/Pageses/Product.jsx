import React from 'react'
import Data from '../Components/Data/Pro_Data'
import Item from '../Components/Item/Item'

function Product() {
  return (
    <div>
 <section id="Projects"
    className="w-fit mx-auto grid flex1 grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
     {
      Data?.map((data)=>{
        return <Item key={data.product_id} _id={data.product_id} Pro_img={data.image} Pro_cat={data.category} Pro_titile={data.name} Pro_price={data.price}  />
      })
     }
  
  </section>


    </div>
  )
}

export default Product
