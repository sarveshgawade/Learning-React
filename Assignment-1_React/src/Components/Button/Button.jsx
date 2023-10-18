function Button ({txt,clickEvent}){ 
    return(
        <button onClick={()=>clickEvent()}>{txt}</button>
    )
}



export default Button