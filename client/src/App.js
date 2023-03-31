import { useEffect } from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Item from './components/Item';
import CheckOut from './scenes/checkout/CheckOut';
import Confirmation from './scenes/checkout/Confirmation';
import CartMenu from './scenes/global/CartMenu';
import Navbar from './scenes/global/Navbar';
import Home from './scenes/home/Home';
import ItemDetails from './scenes/itemDetails/ItemDetails';

const ScrollToTop = ()=>{
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return null
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:itemId' element={<ItemDetails/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/checkout/success' element={<Confirmation/>}/>
      </Routes>
      <CartMenu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
