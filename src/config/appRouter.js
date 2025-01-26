import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signUp';
import Product from '../pages/product';
import NotFound from '../pages/notFound';
import DetailForm from '../pages/detailsForm';
import SubBrach from '../pages/subBranch';
import SubForEdu from '../pages/subForEdu';
import SubForConstr from '../pages/subForConstr';
import SubForStartup from '../pages/subForStartup';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/form' element={<DetailForm />} />
        <Route path='/subBranch' element={<SubBrach />} />
        <Route path='/subForEdu' element={<SubForEdu />} />
        <Route path='/subForConstr' element={<SubForConstr />} />
        <Route path='/subForStartup' element={<SubForStartup />} />
        <Route path='/*' element={<NotFound />} /> {/* Wildcard route at the end */}
      </Routes>
    </BrowserRouter>
  );
}
