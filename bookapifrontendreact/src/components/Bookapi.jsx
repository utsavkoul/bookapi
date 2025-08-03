import React,{useState} from 'react';
import BookList from "../assets/Books";
import AllBooks from './AllBooks';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SideBar from './SideBar';
import AddBooks from './AddBooks';
import MainPage from './MainPage';

import { CiMenuBurger } from "react-icons/ci";
import {Button} from 'react-bootstrap';

const Bookapi=()=>{
    
    return(
   <div >
    
    {/* Header */}
    <header>
        <div className="h-10 w-full bg-blue-500 flex justify-between "> <div className="ml-2 mt-1.5">
      <Button variant="primary" >
        <CiMenuBurger />

      </Button></div>
        <div className="mr-2 justify-center items-center mt-1.5">Logout</div>
       
        </div>
    </header>
    {/* Main Page Columns */}
   
    <div className="">
        <SideBar/>
   
    <div className="justify-center justify-items-center">
        {/* <AllBooks/> */}
        <Routes> 
       <Route path="/AllBooks" element={<AllBooks/>} exact/>
       <Route path="/AddBook"  element={<AddBooks/>} exact/>
       <Route path="/" element={<MainPage/>} exact/>
       </Routes>
    </div>
</div>

</div>
    )
}
export default Bookapi;