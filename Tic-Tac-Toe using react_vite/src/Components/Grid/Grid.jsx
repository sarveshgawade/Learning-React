import {useState} from 'react'
import Card from '../Cards/Card'
import './Grid.css'
import '../../Helpers/checkWinner'
import isWinner from '../../Helpers/checkWinner'

function Grid({numberOfCard}){
    let [board, setBoard] = useState(Array(numberOfCard).fill(""))

    // conditional rendering: true -> 'X' ; false -> 'O'
    let [turn,setTurn] = useState(true)
    let [winner,setWinner] = useState(null)

    function Play(index){
        if(turn === true){
            board[index] = "O"
        }
        else{
            board[index] = "X"
        }
        const win = isWinner(board,turn?'O':'X')
        if(win){
            setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)
    }

    function Reset(){
        setTurn(true)
        setBoard(Array(numberOfCard).fill(""))
        setWinner(null)
    }
    return (
        <div className='grid-wrapper'>
            {
                winner && (
                    <>
                        <h1 className='turn-highlight'>Winner is: {winner}</h1>
                        <button className='reset' onClick={Reset}>Reset</button>
                    </>
                )                
            }
            <h1 className='turn-highlight'>Current Turn: {(turn)? 'O':'X'}</h1>
            <div className='grid'>
                {board.map((item,idx)=> <Card key={idx} onPlay={Play} player={item} index={idx} gameEnd={winner? true:false}/>)}
            </div>
        </div>
    )
}

export  default Grid