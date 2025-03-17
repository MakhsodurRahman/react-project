import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // const [name,handleNameChange] = useInputState('mak');

    const emailState = useInputState('mak');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange}  type="text"  name="name" id="" />
                <br /> */}
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" required />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;