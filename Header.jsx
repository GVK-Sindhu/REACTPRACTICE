import  React from "react";
import Todolist from './Todolist';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FormComponent from './FormComponent';
import Filter from './Filter';
import Pagenotfound from './Pagenotfound';
import { useState,useEffect } from 'react';
function Header(){
    return(
       <>
         
               
          <h1>Header.jsx</h1>
          <Link to="/form">Contact</Link>
          <br/>
          <Link to="/filters">Help</Link>
          <br/>
          <Link to="/todo">Task</Link>
           
       </>
    )
}

export default Header;