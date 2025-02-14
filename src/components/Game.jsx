import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [isXTurn, setIsXTurn] = useState(true);

    const currentSquares = history[history.length-1];

    const handlePlay = (nextSquares) => {
       setHistory([...history, nextSquares])
       setIsXTurn(!isXTurn)
       console.log(history)
    }

    return (
        <div className='game'>
            <div className='game-board'>
                <Board isXTurn={isXTurn} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol>{/*TODO - we'll do it*/}</ol>
            </div>
        </div>
    )



}




export default Game;