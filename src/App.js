import React from 'react';
import './App.css';
import {Routes ,  Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <div>
      <Routes>
      <Route exact path = "/" element= {<HomePage/>}></Route>
      <Route exact path = "/shop" element ={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}


export default App;