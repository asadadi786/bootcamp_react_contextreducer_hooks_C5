import React, { useReducer } from 'react';
import countReducer from './CountReducer';

const Child2 = () => {
   
    let [state, dispatch] = useReducer(countReducer,1);

    //console.log(state);
    return( 
        <div>
             <h2>This is second child using Counter Reducer. </h2>
            <h3>Reducer value is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}> Reducer Increment  </button>
            <button onClick={()=>dispatch('DECREMENT')}> Reducer Decrement  </button>
            
        </div>
    );
}

export default Child2;