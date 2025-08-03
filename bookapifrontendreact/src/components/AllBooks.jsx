import react, {useState,useEffect} from "react";
import base_url from "./Axioshelper/base_url";
import axios from "axios";
const AllBooks=()=>{
    // let Books=new List<>();
    const [BookList,SetBookList]=useState([
        // {Id:"",BookName:"REST API Development with Node.js",Author:" Fernando Doglio"},
        // {Id:"",BookName:"Java for Begneer",Author:"EFG"},
    ]);
    const [NewBook,SetNewBook]=useState([]);
    const newbook=[]
    useEffect(()=>{
       axios.get(`${base_url}/api/v1/books`).then((response)=>{BookList.push(response.data)},(error)=>{console.log(error)});
    //    setnewBook({BookName:"Java tutorials",Author:"EFG"})
    //    console.log("Books:",BookList);
    // NewBook.forEach((e)=>{BookList.push(e)})
      console.log( BookList)
      let iter=BookList.values();
      
        console.log(iter.next());
        // let arr1=iter.values();
        
        // console.log(arr1.next());
        
      newbook.push(iter.next().value);
      console.log(newbook[0])
    //   console.log(iter.next());
      for (let value of iter) {
  	    console.log(value);
       }
    //    ((e)=>{console.log(e)});
    },[]);
    return(
        <div>
        {/* Books List Columns */}
    <div className="text-center right-3.5 justify-center justify-items-center ml-30 h-10  border col-span-2 ">This is List of Books Stored</div>
{BookList.map((book,index)=>(<div className="justify-center ml-30 mt-3"> <div className="h-20 w-150 bg-gray-300  gap-3  ml-50 border-2 block ">
    <div className="grid grid-flow-col grid-rows-3"><div className=" ml-2  w-50 row-span-2 ">{book.bookName}</div>
<div className="ml-3 w-50 row-span-1 ">Author:{book.author}</div>
<div className="text-right right-0 w-50 col-span-2 ml-3 ">Edit</div><div className="right-0 text-right w-50 col-span-2 ml-3 ">Delete</div></div></div></div>))
}
</div>

    );
};
export default AllBooks;