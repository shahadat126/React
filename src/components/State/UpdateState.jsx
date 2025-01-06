import React, { useState } from 'react';

const UpdateState = () => {
    const [count,setCount]=useState(0)
    const handlePlus = ()=>{
        setCount(pcount=> pcount + 1)
        setCount(pcount=> pcount + 1)
        
    }

    return (
        <div>
            <h1>Count {count}</h1>
            <button onClick={handlePlus}>+</button>
           
        </div>
    );
};

export default UpdateState;