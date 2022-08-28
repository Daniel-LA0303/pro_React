//Components
import NavBar from "./components/Navbar/NavBar"
import Home from "./components/pages/Home"
import NewClient from "./components/pages/NewClient"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//styles
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="pages">
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
