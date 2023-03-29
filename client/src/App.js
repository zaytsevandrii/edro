import { useEffect } from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Home from './scenes/home/Home';

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
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
