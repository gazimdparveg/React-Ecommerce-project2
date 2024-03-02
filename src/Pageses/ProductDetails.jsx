import React, { useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../Context/ShopContes';  
import Item from '../Components/Item/Item';  
import { Link } from 'react-router-dom';

function ProductDetails() {
 
  const {data, car , setcar  } = useContext(Shopcontext)
  const id = useParams();
  const pro = data.find((da)=>(da.product_id == id._id));  
 
  
 
   

 const qun=()=>{
    const qun = document.getElementById('qun1').value;
    if(qun>1){
        const toa = Math.round(qun-1);
        const subt = document.getElementById('qun1').value=toa;
        const topri = subt*pro.price
        const price = document.getElementById('price');
        const sho1 = document.getElementById('price1');
        price.textContent =topri
        sho1.textContent =topri+100
    }else{
        document.getElementById('qun1').value=1;
    }
    
 }

 

 const qun2 = ()=>{
    const value = document.getElementById('qun1').value;
    const to = Math.round(+value+1)
    const tova = document.getElementById('qun1').value = to;
    const price = pro.price*tova;
    const sho = document.getElementById('price');
    const sho1 = document.getElementById('price1');
    sho.textContent = price;
    sho1.textContent = price+100;

  } 
 

 const addcartpro2=(product_id,name,price,image)=>{
    
    const qun = document.getElementById('qun1').value;
   
   const fu = {product_id,name,price,image,qun}
   const ca = car.find((da)=>da.product_id===pro.product_id)

   if(product_id === ca?.product_id){
        alert('already added')
        
   }else{
    setcar([...car,fu])
   }
  
   
 }
  
     
  return (
    <div className="">
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-2 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            <img src={pro.image} alt=""
                                className="object-cover w-full lg:h-full "/>
                        </div>
                        <div className="flex-wrap hidden md:flex ">
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <Link
                                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={pro.image} alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </Link>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <Link to=""
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={pro.image} alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </Link>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <Link to=""
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={pro.image} alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </Link>
                            </div>
                            <div className="w-1/2 p-2 sm:w-1/4">
                                <Link to=""
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={pro.image} alt=""
                                        className="object-cover w-full lg:h-20"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                              {pro.name}  </h2>
                            <div className="flex items-center mb-6">
                                <ul className="flex mr-2">
                                    <li>
                                        <Link to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                                <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <span ><div id='price'>${pro.price} </div></span>
                                <span  
                                    className="text-base font-normal text-gray-500 line-through dark:text-gray-400"><div id='price1'>${pro.price+100} </div> </span>
                            </p>
                            <p className="text-green-600 dark:text-green-300 ">7 in stock</p>
                        </div>
                        <div className="flex items-center mb-8">
                            <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                Colors:</h2>
                            <div className="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                    <div className="w-6 h-6 bg-cyan-300"></div>
                                </button>
                                <button
                                    className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div className="w-6 h-6 bg-green-300 "></div>
                                </button>
                                <button
                                    className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div className="w-6 h-6 bg-red-200 "></div>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center mb-8">
                            <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                                Size:</h2>
                            <div className="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                                </button>
                            </div>
                        </div>
                        <div className="w-32 mb-8 ">
                            <label for=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button onClick={qun} 
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number" id='qun1'
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" readOnly
                                    value='1'/>
                                <button onClick={qun2}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button onClick={()=>addcartpro2(pro.product_id,pro.name, pro.price,pro.image)}
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                <button   
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 

  <div className=' bg-slate-100 p-5'>  <h1 className=' text-center text-2xl'>Relative Product</h1>
    <hr />
<section id="Projects"
    className="w-fit mx-auto  grid flex1 grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
       
   {
    data?.map((ds)=>{
        if(ds.category===pro.category){
            return <Item key={ds.product_id} _id={ds.product_id} Pro_img={ds.image} Pro_cat={ds.category} Pro_titile={ds.name} Pro_price={ds.price}  />
        }
    })
}
  
  </section>
  </div>

    </div>
  )
}

export default ProductDetails
