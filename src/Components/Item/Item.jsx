import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/ShopContes';


function Item(Pdata) {
    
    const {car,setcar} = useContext(Shopcontext)
    const name =    Pdata.Pro_titile;
    const nurls = name.replace(/\s/g, '-' ).toLowerCase();

    const addtocart= (product_id,name,image,price)=>{
    
    const qun = 1
     const stor = {product_id,name,image,price,qun}
     const ca = car.find((da)=>da.product_id===Pdata._id)

   if(Pdata._id === ca?.product_id){
    console.log(Pdata.product_id,car.product_id)
        alert('already added')
        
   }else{
    setcar([...car,stor])
    console.log(stor)
   }
    
      
    }
 
  return (
    <div>
          <div   className="w-72 bg-white sm:w-full  shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

      
        
<Link  to={`/ProductDetails/${Pdata._id}/${nurls}`}> 
    <img src={Pdata.Pro_img}  onClick={window.scrollTo(0,0)}
            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" /></Link>
    <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{Pdata.Pro_cat}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{Pdata.Pro_titile}</p>
        <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">${Pdata.Pro_price} </p>
            <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$ {Pdata.Pro_price + 10} </p>
            </del>
                <div id='stop'  onClick={()=>addtocart(Pdata._id,Pdata.Pro_titile,Pdata.Pro_img,Pdata.Pro_price)} className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" 
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg></div>
        </div>
    </div>

</div>
    </div>
  )
}

export default Item
