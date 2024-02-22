
import './App.css';
 import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pageses/Shop';
import ShopCatagory from './Pageses/ShopCatagory'; 
import Cart from './Pageses/Cart';
import LoginSinup from './Pageses/LoginSinup';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Pageses/ProductDetails';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
 
function App() {
  return (
    <div className='App'>
 <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
   
        <Route path='/' element={ <Shop/> }/>
        <Route path='/man' element={ <ShopCatagory Catagory='man'/> }/>
        <Route path='/woman' element={ <ShopCatagory Catagory='woman'/> }/>
        <Route path='/kids' element={ <ShopCatagory   Catagory='kids'/> }/>
        <Route path='/ProductDetails/:_id/:Pro_titile' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/> }/>
        <Route path='/login' element={<LoginSinup/> }/>
      
       
      </Routes>
    <Footer/>
      </BrowserRouter>  
      </QueryClientProvider>
    </div>
  );
}

export default App;
