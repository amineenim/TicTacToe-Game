import { useState } from "react";
import Board from "./Board";

export default function Game() {
    // state that stores the next player
    const [xIsNext, setXIsNext] = useState(true);
    // state that stores the history of the game
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // to render the squares for the current move, we need
    // the history for the last squares array
    const currentSquares = history[history.length - 1];
    const [currentMove, setCurrentMove] = useState(0);

    function jumpTo(i){
        console.log(i);
        setXIsNext(i % 2 === 0);
        setHistory([...history.slice(0,i+1)]);
        setCurrentMove(i);
    }

    function handlePlay(squares){
        setHistory([...history, squares]);
        setXIsNext(!xIsNext);
    }
    const moves = history.map((squares, move) => {
        console.log(move);
        console.log(squares);
        let description;
        if(move > 0){
            description = 'Go to move #' + move;
        }else{
            description = 'Go to game start'
        }
        console.log(description);
        return(
            <li>
                <button key={move} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    })
    
    return (
      <div className="game">
        <div className="game-board">
          <Board handlePlay={handlePlay} 
          currentSquares={currentSquares} 
          xIsNext={xIsNext}
          currentMove={currentMove}
          setCurrentMove={setCurrentMove} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  