import React from 'react'
import { Footer } from '../HeaderAndFooter/Footer'
import { Header } from '../HeaderAndFooter/Header'
import { Home } from '../Home/Home'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { ProductsList } from '../products/ProductsList';
import { OwnedProdPage } from '../User Owned/OwnedProdPage';
export const Main = () => {
  

  return (
      <BrowserRouter>
        <Header/>
        
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/home"  element = {<Home/>}/>
        <Route path = "/category/:categoryName" element = {<ProductsList/>}/>
        <Route path = "/owned" element = { <OwnedProdPage/> }/>
      </Routes>
   <Footer/>
   
    </BrowserRouter>
  )
}
