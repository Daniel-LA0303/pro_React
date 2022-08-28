import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/views/Home'
import NewClient from './components/views/NewClient'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className='main-container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/new-client' element={<NewClient />}/>

        </Routes>
      </div>
      
      </BrowserRouter>
    </>
  )
}

export default App
