import '../InputFieldStyle/InputFieldStyle.css'

function Login(){
    return (
        <>
            <input type="text" placeholder="Enter Username" className="inp-field"/>
            <input type="password" placeholder="Enter Password" className="inp-field"/>
        </>
    )
}

export default Login