import React, {useState, useEffect} from 'react'
import NavBar from "./components/Navbar"
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import FormClient from "./pages/FormClient"

function App() {

  // const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [customerE, setCustomerE] = useState({});
  const [filter, setFilter] = useState('');
  const [filters, setFilters] = useState([]);

  const deleteCustomer = (id) => {
    const newCustomers= customers.filter(customer => customer.id !== id);
    setCustomers(newCustomers);
  }

  

  useEffect(() => {
    if(filter){
      const newFilters = customers.filter( customer => customer.category === filter);
      setFilters(newFilters);
    }
  }, [filter])
  


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={
            <Home 
              customers = {customers} 
              deleteCustomer = {deleteCustomer}
              customerE = {customerE}
              setCustomerE = {setCustomerE}
              filter = {filter}
              setFilter = {setFilter}
              filters = {filters}

            />
          }/>
          <Route path='/form-client' element={
            <FormClient 
              customers={customers} 
              setCustomers={setCustomers}
              customerE = {customerE}
              setCustomerE = {setCustomerE}
              setFilter = {setFilter}
            />
          }/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
