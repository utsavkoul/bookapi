import React from "react";
// import useNavigate from "react-router";
import { useNavigate } from "react-router";
    import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const SideBar=()=>{
     const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const Navigate = useNavigate();
    const BookListButton=()=>{
        Navigate("/AllBooks")
    }
    const AddBookButton=()=>{
        Navigate("/Addbook")
    }
    return(
        <div>
              {/* Side Bar
    <div className="h-full w-30 bg-gray-400 fixed">
         <div className=" justify-center items-center  mb-1 ">
       <ul className="left-0 ml-0 left-auto "><li className=" justify-center border text-center h-10" > Menu</li><li className="border text-center h-10" ><button onClick={AddBookButton}>AddBook</button></li><li className="border text-center h-10" href="/AllBooks"><button onClick={BookListButton}> Books</button></li></ul> 
    </div>
    </div> */}


 
  
{/* 
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
         <Offcanvas.Header >
          <Offcanvas.Title>Add Book</Offcanvas.Title>
        </Offcanvas.Header>
         <Offcanvas.Header >
          <Offcanvas.Title>Books</Offcanvas.Title>
        </Offcanvas.Header>
     
      </Offcanvas>

    </div>
    );
};
export default SideBar;