import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icons({nameOfIcon}){
    if(nameOfIcon === 'cross'){
        return <FaTimes/>
    }
    else if(nameOfIcon === 'circle'){
        return <FaRegCircle/>
    }
    else{
        return <FaPen/>
    }
}

export default Icons