// importing hooks
import {useState} from 'react'

// global variable 
let y = 0 ;

// using use state hook
function Counter(){
    
    // creating a state variable using hooks
    let [x,changeX] = useState(0)

    return (
        <>
            <p>X:{x}</p>
            <p>Y:{y}</p>
            <button onClick={()=>changeX(x+1)}>Inc</button>
            <button onClick={()=>changeX(x-1)}>Inc</button>
        </>
    )
}

export default Counter