import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    
    const handleIncrease = () => {
        setValue(prevValue => prevValue + 1)
    }
    const handleDecrease = () => {
        setValue(prevValue => prevValue - 1)
    }
  return (
    <div>
    <h1>{value}</h1>
    <button onClick={handleIncrease} ></button>
    <p><button onClick={handleDecrease}></button></p>
    </div>
  )
}

export default Counter