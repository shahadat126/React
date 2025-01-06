import React, { useState } from 'react';

const UseState = () => {
    const [count,setCount] = useState(0)
    const  handledecrement = ()=>{
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handledecrement}>decrement</button>
        </div>
    );
};

export default UseState;