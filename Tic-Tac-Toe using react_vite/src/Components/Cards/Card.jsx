import Icons from "../Icons/Icons";

function Card({player,onPlay,index,gameEnd}){
    let icon = <Icons/> 

    if(player === 'X'){
        icon = <Icons nameOfIcon="cross"/>
    }
    else if(player === 'O'){
        icon = <Icons nameOfIcon="circle"/>
    }
  
    return (
        <div className="card" onClick={()=> !gameEnd && player=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card