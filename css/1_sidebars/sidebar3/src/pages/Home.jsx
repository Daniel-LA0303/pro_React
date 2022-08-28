import React,{useState} from 'react'
import Customer from '../components/Customer';
import Modal from '../components/Modal';

const Home = ({
    customers, 
    deleteCustomer,
    customerE,
    setCustomerE,
    filter,
    setFilter,
    filters,
}) => {

    const [modal, setModal] = useState(false);

    return (  
        
        <>
            <div className='container'>
            {customers.length > 0 && (
                 <select 
                    // name='category'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="">---Seleccione---</option>
                    <option value="economiser">Économiser</option>
                    <option value="repas">Repas</option>
                    <option value="maison">Maison</option>
                    <option value="depenses">Dépenses</option>
                    <option value="loisir">Loisir</option>
                    <option value="sante">Santé</option>
                    <option value="abonnements">Abonnements</option>
                </select>
            )}
        
                <h1>Notre Clients</h1>
                {filter ? (
                    <div className='content-customer'>
                        {filters.map(customer  => (
                            <Customer 
                                key={customer.id}
                                customer={customer}
                                deleteCustomer = {deleteCustomer}
                                setCustomerE = {setCustomerE}
                                setModal = {setModal}
                            />
                        ))} 
                    </div>
                ) : (
                    <div className='content-customer'>
                        {customers.map(customer  => (
                            <Customer 
                                key={customer.id}
                                customer={customer}
                                deleteCustomer = {deleteCustomer}
                                setCustomerE = {setCustomerE}
                                setModal = {setModal}
                            />
                        ))} 
                </div>
                )}
                
            </div>
            <div>{modal && (
                <Modal 
                    setModal = {setModal}
                    customerE={customerE}
                    setCustomerE = {setCustomerE}
                />
            )}</div>
        </>
    );
}
 
export default Home;