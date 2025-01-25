import React from 'react'
import  {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signUp'
import Product from '../pages/product';
import NotFound from '../pages/notFound';
import AddProduct from '../pages/AddProduct';
import About from '../pages/About';


export default function Approuter() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
