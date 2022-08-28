import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({
    customers, 
    setCustomers, 
    customerE, 
    setCustomerE, 
    setFilter,
    setModal
}) => {
    const navigate = useNavigate();

    //States
    const [data, setData] = useState({
        name: '',
        lastName: '',
        tel: '',
        company: '',
        wage: '',
        kind: '',
        category: ''
    })   

    const {name, lastName, tel, company, wage, kind, category} = data;

    useEffect(() => {
        if(Object.keys(customerE).length > 0){
            //
            setData({
                name: customerE.name,
                lastName: customerE.lastName,
                tel: customerE.tel,
                company: customerE.company,
                wage: customerE.wage,
                kind: customerE.kind,
                category: customerE.category
            })
        }
    }, [customerE])
    

    //Functions
    const getData = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const sendData = e => {
        e.preventDefault();
        //  = parseInt(wage);
        // console.log(wage);s
        //Validation
        if([name, lastName, tel, company, wage, kind, category].includes('')){
            alert('error');
            return;
        }
        

        if(customerE.id){
            //We are editing
            data.id = customerE.id
            const customersUpdate = customers.map(customerState => customerState.id === customerE.id ? data : customerState);
            setCustomers(customersUpdate);
            setCustomerE({});
            setModal(false);
             //Update data
            setData({
                name: '',
                lastName: '',
                tel: '',
                company: '',
                wage: '',
                kind: '',
                category: ''
            })
            setFilter('');

            return;
        }else{
            //We are adding a new customer
            //assigning id
            data.id = generarId();
            //Update costomers
            setCustomers([
                ...customers, data
            ]);
             //Update data
            setData({
                name: '',
                lastName: '',
                tel: '',
                company: '',
                wage: 0,
                kind: '',
                category: ''
            })
            setFilter('');
            //Redirecting
            navigate('/');
        }
    }
    return (  
        <>
            <div>
                <form className='box' onSubmit={sendData}>
                    <h1>Connexion</h1>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nom" 
                        onChange={getData}
                        value={name}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Prénoms" 
                        onChange={getData}
                        value={lastName}
                    />
                    <input 
                        type="text" 
                        name="tel" 
                        placeholder="Téléphone" 
                        onChange={getData}
                        value={tel}
                    />
                    <input 
                        type="text" 
                        name="company" 
                        placeholder="Entreprise" 
                        onChange={getData}
                        value={company}
                    />
                    <input 
                        type="number" 
                        name="wage" 
                        placeholder="Salaire désiré" 
                        onChange={getData}
                        value={wage}
                    />
                    <div>
                        <input 
                            type="radio"
                            name='kind'
                            value="Homme"
                            checked={kind === "Homme"}
                            onChange={getData}
                        />Homme
                        <input 
                            type="radio"
                            name='kind'
                            value="Femme"
                            checked={kind === "Femme"}
                            onChange={getData}
                        />Femme  
                    </div>
                    
                    <select 
                        name='category'
                        value={category}
                        onChange={getData}
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

                    <input 
                        type="submit" 
                        name="" 
                        // value={Object.keys(customerE).length > 0 ? 'Modifier' : 'Ajouter'} 
                    />
                    
                </form>
            </div>
            <div></div>
        </>
    );
}
 
export default Form;