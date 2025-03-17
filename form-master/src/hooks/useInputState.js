import { useState } from "react"

const useInputState = (defaultValue='') =>{
    const [value,setValue] = useState(defaultValue);

    // const handleChange = event =>{
    //     setValue(event.target.value);
    // }

    const onChange = event =>{
        setValue(event.target.value);
    }

    return {value,onChange}
}
export default useInputState;