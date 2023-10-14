// importing hooks
import {useState} from 'react'

// global variable 
// let z = 0 ;

// using use state hook
function Counter(){
    
    // creating a state variable using hooks (here array is destructured !)
    let [x,changeX] = useState(0)
    let [y,changeY] = useState(0)

    return (
        <>
            <p>X:{x}</p>
            <button onClick={()=>changeX(x+1)}>Inc</button>
            <button onClick={()=>changeX(x-1)}>Inc</button>

            {/* conditional rendering */}
            <p>Y:{y}</p>  {(y%2 === 0)?'even':'odd'}
            <button onClick={()=>changeY(y+1)}>Inc</button>
            <button onClick={()=>changeY(y-1)}>Inc</button>
        </>
    )
}

export default Counter

/**
 * Hooks : 
 *  1) React provides Hooks. Hooks are basically utility functions provided react 
 *          types : Inbuilt & User-defined
 *  2) React does not target local variables . It olny renderes the local variables once
 *  3) Thus "STATE VARIABLES" are introduced in React
 *  4) State variables basically are re-rendered when modified  
 *  5) Changing one state variable does not have an impact on other state variable
 *  6) "useState" is basically a hook
 *      useState expects only one argument i.e the initial value of the component to be 
 *      changed 
 *      useState returns a array of size 2: 
 *          arr[0] => actual state varible
 *          arr[1] => function that can modify the state variable (state-setter function)
 * 
 *          
 */