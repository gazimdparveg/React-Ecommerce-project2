import React, { useContext } from 'react' 
import { Shopcontext } from '../Context/ShopContes'


function Cart() {

  const {carts, data, removecartpro} = useContext(Shopcontext)
  
  return (
    <div className=' relative container bg-gray-900 flex flex-col justify-center p-2 mx-auto sm:py-12   lg:flex-row lg:justify-between '>
       
       
	<div class="flex flex-col w-fit m-auto mt-10 p-6 space-y-4 sm:p-10 bg-gray-500 text-gray-100">
		<h2 class="text-xl font-semibold">Your cart</h2>
		<ul class="flex flex-col divide-y divide-gray-700">

{ data?.map((data)=>{
  if(carts[data.product_id]>0){
   
    
   
                
     
  return  <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
    <div class="flex w-full space-x-2 sm:space-x-4">
      <img class="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={data.image} alt="Polaroid camera"/>
      <div class="flex flex-col justify-between w-full pb-4">
        <div class="flex justify-between w-full pb-2 space-x-2">
          <div class="space-y-1">
            <h3 class="text-lg font-semibold leadi sm:pr-8">{data.name} </h3>
           
          </div>
          <div class="text-right">
            <p class="text-lg font-semibold">${data.price*carts[data.product_id]}</p> 
            <p class="text-lg font-semibold">{carts[data.product_id]}</p> 
          </div>
        </div>
        <div class="flex text-sm divide-x">
          <button onClick={()=>{removecartpro(data.product_id)}} type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
              <rect width="32" height="200" x="168" y="216"></rect>
              <rect width="32" height="200" x="240" y="216"></rect>
              <rect width="32" height="200" x="312" y="216"></rect>
              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
            </svg>
            <span>Remove</span>
          </button>
           
        </div>
      </div>
    </div>
  </li>
 
  }
})}
		
			 
			 
		</ul>
		<div class="space-y-1 text-right">
			<p>Total amount:
				<span class="font-semibold">${ }</span>
			</p>
			<p class="text-sm text-gray-400">Not including taxes and shipping costs</p>
		</div>
		<div class="flex justify-end space-x-4">
			<button type="button" class="px-6 py-2 border rounded-md border-violet-400">Back
				<span class="sr-only sm:not-sr-only">to shop</span>
			</button>
			<button type="button" class="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
				<span class="sr-only sm:not-sr-only">Continue to</span>Checkout
			</button>
		</div>
	</div>
 

    </div>
  )
}

export default Cart
