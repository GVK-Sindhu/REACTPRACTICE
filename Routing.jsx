import { useState,useEffect } from 'react';
import Todolist from './Todolist';
import Header from './Header';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import FormComponent from './FormComponent';
import Filter from './Filter';
import Pagenotfound from './Pagenotfound';
import { Link } from "react-router-dom";
import Productioncard from './productioncard';
import Productioninfo from './Productioninfo';
function Routing() {
  return ( 
    <>  
      <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<Productioncard/>}/>
                        <Route path="/productioninfo/:ID" element={<Productioninfo/>}/>
                          {/* <Route path="/" element={<Header/>}/>
                          <Route path="/form" element={<FormComponent/>}/>
                          <Route path="/filters" element={<Filter/>}/>
                          <Route path="/todo" element={<Todolist/>}/>
                          <Route path="*" element={<Pagenotfound/>}/> */}
                          </Routes>
        </BrowserRouter>
        
    </>
  )
};
export default Routing;