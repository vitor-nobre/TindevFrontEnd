import React,{useState} from 'react';
import './Login.css';
import  Logo from '../assets/logo.svg';
import api from '../services/api';

export default function Login({history}) {
    const [ username, setUsername ] = useState('');
   
    async function handleSubmit(e) {  
     e.preventDefault();
     const response = await api.post('/devs',{
          username,
        });
     const {_id} = response.data;
     history.push(`/devs/${_id}`);
    }


    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <img src={Logo} alt="Tindev"/>
                <input 
                 placeholder="Digite seu Usuário no GitHub"
                 value={username}
                 onChange={e => setUsername(e.target.value)}
                />
                <button type='submit'> Enviar </button>
            </form>
        </div>
    );

}

