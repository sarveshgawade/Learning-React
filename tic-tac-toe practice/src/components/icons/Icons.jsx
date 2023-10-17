import { FaCircle, FaCross, FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Card({nameOfIcon}){
    if(nameOfIcon === 'Cross'){
        return <FaTimes/>
    }
    else if(nameOfIcon === 'Circle'){
        return <FaRegCircle/>
    }
    else{
        return <FaPen/>
    }
}

export default Card