import React from 'react'
import Sidebar from './components/sideBar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const url= import.meta.env.VITE_BACKEND_URL;

  return (
    <div>
      <ToastContainer/>
      <Sidebar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
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
