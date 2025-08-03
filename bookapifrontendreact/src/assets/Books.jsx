import React,{useState} from "react";
const Books=()=>{
    const [BookList,setBookList]=useState([
        {BookName:"REST API Development with Node.js",Author:" Fernando Doglio"},
        {BookName:"Pro RESTful APIs: Design, Build and Integrate with REST, JSON, XML and JAX-RS",Author:"Sanjay Patni (auth.)"},
        {BookName:"RESTful Web API Design with Node.js: Design and implement comprehensive RESTful solutions in", Author:" Valentin Bojinov"},
        {BookName:"PLearn NodeJS in 1 Day: Complete Node JS Guide with Examples",Author:"Krishna Rungta"},
        {BookName:"REST API Design Rulebook",Author:"  Mark Massé"},
        {BookName:"Designing Web APIs: Building APIs That Developers Love",Author:"Brenda Jin & Saurabh Sahni & Amir Shevat"},
        {BookName:"API Architecture - The Big Picture for Building APIs",Author:"Matthias Biehl"},

    ])
    
    return{
    }
}
export default Books;