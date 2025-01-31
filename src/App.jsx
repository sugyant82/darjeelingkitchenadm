import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import MenuBar from './components/MenuBar/MenuBar'

const App = () => {

  //const url= import.meta.env.VITE_BACKEND_URL;
  const url = "https://darjeelingkitchenbe.onrender.com";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <MenuBar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
