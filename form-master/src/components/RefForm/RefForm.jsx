import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)  
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" defaultValue={'mak'} name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" required />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RefForm;