import React from 'react'
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";

import {Home} from '../../Pages/Home/Home'
import { About } from "../../Pages/About/About";
import { ProductDetails } from "../../Pages/ProductDetails/ProductDetails";
import { Product } from "../../Pages/Product/Product";
import { Blog } from "../../Pages/Blog/Blog";
import { Support } from "../../Pages/Support/Support";

import {AnimatePresence} from "framer-motion";
import { BlogDetails } from '../../Pages/BlogDetails/BlogDetails';
import { Terms } from '../../Pages/Terms/Terms';
import { Privacy } from '../../Pages/Privacy/Privacy';
import { Warranty } from '../../Pages/Warranty/Warranty';

function AniamtedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/"  element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/products"  element={<Product/>} />
        <Route path="/productsDetails"  element={<ProductDetails/>} />
        <Route path="/blog"  element={<Blog/>} />
        <Route path="/blogDetails"  element={<BlogDetails/>} />
        <Route path="/support"  element={<Support/>} />
        <Route path="/termsofuse"  element={<Terms/>} />
        <Route path="/privacypolicy"  element={<Privacy/>} />
        <Route path="/warranty"  element={<Warranty/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AniamtedRoutes
