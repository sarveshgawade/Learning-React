import { useState } from "react"

function List({namesOfCast}){
    let oppenheimerCasting = [...namesOfCast]
    return(
        <ul>
            <h2>List of Casting: </h2>
            {oppenheimerCasting.map((el,idx)=><li key={idx}>{el}</li>)}
        </ul>
    )
}

export default List