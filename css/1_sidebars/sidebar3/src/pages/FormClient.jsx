import React, {useState, useEffect} from 'react'
import Customer from '../components/Customer';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';


const FormClient = ({
    customers, 
    setCustomers, 
    setCustomerE, 
    setFilter,

}) => {

    
    return (  
        <>
            <Form 
                customers = {customers}
                setCustomers = {setCustomers}
                setCustomerE = {setCustomerE}
                setFilter = {setFilter}

            />
        </>

    );
}
export default FormClient;