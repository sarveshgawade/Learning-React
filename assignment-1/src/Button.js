function Button(props){
    return(
        <>
            <button onClick={Hello}>{props.text}</button>
        </>
    )
}

function Hello(){
   
    return(
        console.log(`Button Clicked `)
    )
}

export default Button