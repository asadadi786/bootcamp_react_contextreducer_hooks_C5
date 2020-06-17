import React, { useContext } from 'react';
import CountContext from './CounterContext';


const Child = () => {
    let contextValue = useContext(CountContext);
    
    return (
        <div>
            <h2>This is first child using Counter Context. </h2>
             <h4> This value of the counter is {contextValue[0]}</h4>
             <button onClick = {()=> {contextValue[1](++contextValue[0])}}>
                 
                 Increment Context
            
            </button>
            <button onClick = {()=> {contextValue[1](--contextValue[0])}}>
                 
                 Decrement Context
            
            </button>
        </div>
    )
}

export default Child;
