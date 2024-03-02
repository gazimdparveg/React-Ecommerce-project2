import React, { useContext, useEffect, useState } from 'react' 
import { Shopcontext } from '../Context/ShopContes'


function Cart() {

  const { car, setcar} = useContext(Shopcontext)
  const [price , setprice] = useState()
  
   

  const totalprice = ()=>{
    let ans = 0;
    car?.map((data)=>(
      ans += data.price*data.qun
    ))
    setprice(ans);
 
  }

 useEffect(()=>{
  totalprice();
 })
 
 const removecart = (product_id)=>{
  const re = car?.filter((da)=>da.product_id !== product_id)
  setcar(re);
 }
 const quns = (product_id,d)=>{
   const sho = car?.find((da)=>da.product_id===product_id)
  if(sho.qun<1){
    const re = car?.filter((da)=>da.product_id !== product_id)
    setcar(re);
   
  }else{
    setcar(
      car.map((da)=>
        da.product_id === product_id          
       ? {...da , qun:Math.round(+sho.qun+d)}  
       : da
        
     )
    )
  }
   
  }
    
 
 

  return (
    <div className=' relative container bg-gray-900 flex flex-col justify-center p-2 mx-auto sm:py-12   lg:flex-row lg:justify-between '>
       
       
	<div className="flex flex-col w-fit m-auto mt-10 p-6 space-y-4 sm:p-10 bg-gray-500 text-gray-100">
		<h2 className="text-xl font-semibold">Your cart</h2>
		<ul className="flex flex-col divide-y divide-gray-700">

{ car?.map((data)=>{
 
 
 
 
                
     
  return   <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
    <div className="flex w-full space-x-2 sm:space-x-4">
      <img key={data.product_id} className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={data.image} alt="Polaroid camera"/>
      <div className="flex flex-col justify-between w-full pb-4">
        <div className="flex justify-between w-full pb-2 space-x-2">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leadi sm:pr-8">{data.name} </h3>
           
          </div>
          <div className="text-right">
            <p className="text-sm text-red-200 font-semibold">Price: ${data.price}</p> 
            <p className="text-sm text-red-200 font-semibold">
            <div className="w-32 mb-8 ">
                            <label for=""
                                className=" "> </label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button  
                                onClick={()=>quns(data.product_id,-1)}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number" id='qun1'
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" readOnly
                                    value={data.qun}/>
                                <button  
                                 onClick={()=>quns(data.product_id,+1)}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
            
            </p> 
            <p id='price' className="text-sm   text-red-200 font-semibold">Total Price:  ${data.price*data.qun}</p> 
          </div>
        </div>
        <div className="flex text-sm divide-x">
          <button   type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
              <rect width="32" height="200" x="168" y="216"></rect>
              <rect width="32" height="200" x="240" y="216"></rect>
              <rect width="32" height="200" x="312" y="216"></rect>
              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
            </svg>
            <span onClick={()=>removecart(data.product_id)}>Remove</span>
          </button>
           
        </div>
      </div>
    </div>
  </li>
 
 
})}
		
			 
			 
		</ul>
		<div className="space-y-1 text-right">
			<p>Total amount:
				<span className="font-semibold">${price}</span>
			</p>
			<p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
		</div>
		<div className="flex justify-end space-x-4">
			<button type="button" className="px-6 py-2 border rounded-md border-violet-400">Back
				<span className="sr-only sm:not-sr-only">to shop</span>
			</button>
			<button type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
				<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
			</button>
		</div>
	</div>
 

    </div>
  )
}

export default Cart
