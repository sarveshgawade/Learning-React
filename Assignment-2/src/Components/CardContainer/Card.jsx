import './Card.css'
import Logo from '../Logo/Logo' 
import Login from '../Login/Login'


function Card({type}){
    return(
        <div className="card">
            <Logo/>
            <Login/>
        </div>
    )
}

export default Card