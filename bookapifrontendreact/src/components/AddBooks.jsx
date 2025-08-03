import React,{useState, useEffect} from "react";
import axios from 'axios';
import base_url from '../components/Axioshelper/base_url';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const AddBooks=()=>{


 
      const [title,SetTitle]=useState();
      const [author,SetAuthor]=useState();
      const titletext=(e)=>{
          SetTitle(e.target.value);
           console.log(title);
      }
      const authortext=(e)=>{
        SetAuthor(e.target.value);

      }
      const handleaddbutton=()=>{
        console.log(title)
        console.log(author)
        const bookdetail={
          title:title,
          author:author
        }
        
        axios({
          method: 'post',
          url: `${base_url}/addbook`,
          data: {
           title:title,
          author:author  
          }
        });
        // axios.post(`${base_url}/addbook`,bookdetail)
      }

      // useEffect(()=>{
       
      // },[])
    return(
      
      <div className=" w-50 h-50 mt-20 ">
      
        {/* <div className="h-100 w-100 border ">
            <div className="justify-center justify-items-center  text-center mb-3 text-white ">Add Books</div>
            <label htmlFor="title" className="block  mb-3 text-white ">Book Title</label>
            <input type="text" className="h-10 w-full border block   mb-3  bg-white  "name="title" onChange={titletext} placeholder="Enter Book Title"></input>
            <label htmlFor="author" className="block  mb-3 text-white">Book Author</label>
            <input type="text" className="h-10 w-full border block  mb-3 bg-white"name="author" onChange={authortext} placeholder="Add Book Author"></input>
            <div className="flex gap-2 justify-center mt-5">
            {/* <button className="border" onClick={handleaddbutton}>Add Book</button>
            <button className="border">Clear Form</button> */}
             {/* <Button variant="success" >Add Book</Button> */}
          {/* <Button as="input" type="submit" value="Add Book" />
            <Button type="submit">Clear Form</Button> */}
            {/* import Button from 'react-bootstrap/Button'; */}

    <Form className=" bg-gray-400" >
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Book Title" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter Author Name" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <div className="justify-center align-items-center">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="submit">
        Clear Form
      </Button>
      </div>
    </Form>


             </div>
     
      );
};
export default AddBooks;