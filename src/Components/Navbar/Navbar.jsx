import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
 import { Shopcontext } from '../../Context/ShopContes'


 


function Navbar() {

  const {car} = useContext(Shopcontext)

	const [menu , setmenu]= useState('')

 
	 console.log(menu)

  return (
    <div className=' relative'>
     <header className="p-2  fixed w-full z-10  bg-blue-950 text-gray-100">
	<div className="container relative  z-1  flex justify-between h-10 mx-auto">
		<div className="flex  ">
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
				<img className='h-12 w-15' src="./Assets/pg.png" alt="" />
			</a>
			<ul className="items-stretch hidden space-x-3   lg:flex">

            
				<li className="flex">
					<a rel="noopener noreferrer" onClick={()=>{setmenu('shop')}}   className="flex items-center px-4 -mb-1 border-b-2 border-transparent   "><Link to={'/'}> Shop</Link>  </a>
				</li>
				
				<li className="flex">
					<a rel="noopener noreferrer" onClick={()=>{setmenu('man')}}   className="flex items-center px-4 -mb-1 border-b-2 border-transparent"> <Link to={'/man'}> Man</Link>  </a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" onClick={()=>{setmenu('woman')}}  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"><Link to={'/woman'}> WoMan</Link> </a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" onClick={()=>{setmenu('kids')}}   className="flex items-center px-4 -mb-1 border-b-2 border-transparent"><Link to={'/kids'}> Kids</Link> </a>
				</li>
			</ul>
		</div>

 

        <fieldset className=" space-y-1 text-black">
	<label htmlFor="Search" className="hidden">Search</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4  text-black">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search" name="Search"     placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100  text-gray-900 focus:bg-gray-100 focus:dark:border-violet-400" />
	</div>
</fieldset>

<Link to={'/cart'}>
<div className=" cursor-pointer p-2 h-10 rounded-md bg-gray-100 flex justify-center items-center">
    <div className="relative py-2">
  <div className="t-0 absolute left-3">
    <p className="flex  w-2 h-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
		 {[car?.length]} 
		 </p>
  </div>
 
  <img className="file: mt-4 h-6 w-6" src="./Assets/cart.png " alt="" />
</div>
</div></Link>

 
 

		<div className="items-center flex-shrink-0 hidden lg:flex">
		<Link to={'/login'}>	<button className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Log in</button> </Link> 
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  )
}

export default Navbar
