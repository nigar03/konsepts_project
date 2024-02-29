import React, { useContext} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutMe from './pages/AboutMe';
import OurTeam from './pages/OurTeam';
import OurClients from './pages/OurClients';
import { ModeContext, ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';
import PricingPlans from './pages/PricingPlans';
import GetInTouch from './pages/GetInTouch';
import Store from './pages/Store';
import { ProductProvider } from './context/ProductProvider';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from 'react-use-cart';
import CartPage from './pages/CartPage';
import FagPage from './pages/FagPage';
import Dashboard from './pages/admin/Dashboard';
import AddKonsept from './pages/admin/update/AddKonsept';
import EditKonsept from './pages/admin/update/EditKonsept';
import ShopNow from './pages/ShopNow';
import GetKonsept from './pages/GetKonsept';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';
import Payment from './pages/Payment';
import { WishlistProvider } from 'react-use-wishlist';
import Wishlist from './pages/Wishlist';
import Signup from './pages/Signup';
import Buy from './pages/Buy';



// import SecFive from './components/SecFive'

// import Footer from './components/Footer'



const Main=()=>{
  const [mode] =useContext(ModeContext);
  return(
    <div className={mode }>
<Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/aboutus' element={<AboutUs/>}></Route>
    <Route path='/aboutme' element={<AboutMe/>}></Route>
    <Route path='/ourteam' element={<OurTeam/>}></Route>
    <Route path='/ourclients' element={<OurClients/>}></Route>
    <Route path='/pricingplans' element={<PricingPlans/>}></Route>
    <Route path='/getintouch' element={<GetInTouch/>}></Route>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/store/:id' element={<ProductDetails/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
    <Route path='/fagpage' element={<FagPage/>}></Route>
    <Route path='/admin' element={<Dashboard/>}></Route>
    <Route path='/admin/add' element={<AddKonsept/>}></Route>
    <Route path='/admin/edit/:id' element={<EditKonsept/>}></Route>
    <Route path='/shopnow' element={<ShopNow/>}></Route>
    <Route path='/getkonsept' element={<GetKonsept/>}></Route>
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/wishlist' element={<Wishlist/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route> 
     <Route path='/signup' element={<Signup/>}></Route> 
     <Route path='/buy' element={<Buy/>}></Route> 
     {/* <Route path='/admintwo' element={<Dashboardtwo/>}></Route> 
     <Route path='/admintwo/add' element={<AddAdmin/>}></Route>
    <Route path='/admintwo/edit/:id' element={<EditAdmin/>}></Route> */}
    </Routes>   
</div>
    
  )
}


const App = () => {
  return (
   <BrowserRouter>
   <WishlistProvider>
   <CartProvider>
   <ProductProvider>
   <LangProvider>
   <ModeProvider>
 <Main/>
   </ModeProvider>
   </LangProvider>
   </ProductProvider>
   </CartProvider>
   </WishlistProvider>
   </BrowserRouter>
  )
}

export default App
