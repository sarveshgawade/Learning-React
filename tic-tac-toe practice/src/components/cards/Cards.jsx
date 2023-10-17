import Icons from '../icons/Icons'
import './Card.css'

function Cards({playerName,onPlay,index,gameEnd}){
    let icon = <Icons/>
    if(playerName === 'X'){
        icon = <Icons nameOfIcon='Cross'/>
    }
    else if(playerName === 'O'){
        icon = <Icons nameOfIcon='Circle'/>
    }
    return (
        <div className="card" onClick={()=>!gameEnd && playerName=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Cards