import React, { useState } from 'react';

const StateFullForm = () => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState('');
    const [name,setName] = useState(null);
    const [error,setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name,email,password)
        
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
        console.log(e.target.value)
        if(password.length < 6){
            setError('password need 6 degit')
        }else{
            setError('');
            console.log(name,email,password)
        }
    }

    const handleNameChange = e =>{
        setName(e.target.value);
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name" id="" />
                <br />
                <input onChange={handleEmailChange}
                 type="email" name="email" id="" />
                <br />
                <input required onChange={handlePasswordChange} type="password" name="password" id="" />
                <br />
                <button>Submit</button>
                    {
                        error && <p>{error}</p>
                    }   
            </form>
            
        </div>
    );
};

export default StateFullForm;