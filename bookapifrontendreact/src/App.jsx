import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Bookapi from './components/Bookapi'
import AddBooks from './components/AddBooks'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <Bookapi/>
    {/* <AddBooks/> */}
    {/* <Routes> */}
     {/* <Route path="/bookapi" element={<Bookapi/>} /> */}
     {/* </Routes> */}
    </>
  )
}

export default App
