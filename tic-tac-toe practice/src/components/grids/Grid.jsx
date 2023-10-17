import Card from '../cards/Cards'
import './Grid.css' 
import { useState } from 'react'
import isWinner from '../../helper/checkWinner'

function Grid({numberOfCards}){
    const [board,setBoard] = useState(Array(numberOfCards).fill(''))
    const [turn,setTurn] = useState(true)
    const [winner,setWinner] = useState(null)

    function Play(index){
        if(turn == true){
            board[index] = "X" ;
        }
        else{
            board[index] = "O" ;
        }
        const win = isWinner(board,turn? "X":"O")
        if(win){
            setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)
    }

    function reset(){
        setTurn(true)
        setBoard(Array(numberOfCards).fill(''))
        setWinner(null)
    }
    return (

        <div className='grid-wrapper'>
            {
                winner && (
                    <>
                        <h1 className='turn-highlight'>Winner is: {winner}</h1>
                        <button className='reset-btn' onClick={reset}>Reset</button>
                    </>
                )
            }
            <div className='turn-highlight'>
                <h1>Current turn : {turn? 'X':'O'}</h1>
            </div>
            <div className="grid">
                {board.map((el,idx)=><Card gameEnd={winner?true:false} key={idx} playerName={el} index={idx} onPlay={Play}/>)}
            </div>
        </div>
        
    )
}

export default Grid