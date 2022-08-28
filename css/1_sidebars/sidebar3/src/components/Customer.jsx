import React from 'react'
import { useNavigate } from 'react-router-dom'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';


const Customer = ({customer, deleteCustomer, setCustomerE, setModal}) => {

    const navigate = useNavigate();

    const {name, lastName, tel, company, wage, id} = customer;

    const editCustomer = (customer) => {
        setCustomerE(customer);
        setModal(true)
    }

    const v = 66;

    return (  
        <>
            <div className='card'>
                <div className='content-card'>
                    <h1>{name}</h1>
                    <p>{lastName}</p>
                    <p>{tel}</p>
                    <p>{company}</p>
                    <p>{wage}</p>
                    <CircularProgressbar 
                        styles={buildStyles({
                            pathColor: "#2ecc71",
                            trailColor: "#fff",
                            textColor: "#fff"
                        })}
                        value={v}
                        text={`${v} value`}
                    />
                    <button 
                        onClick={()  => deleteCustomer(id)}
                        className='delete' 
                    >Delete</button>
                    <button 
                        onClick={()  => editCustomer(customer)}
                        className='delete' 
                    >Edit</button>
                </div>
            </div>
        </>
    );
}
 
export default Customer;