import { useState } from "react";
import Board from "./Board";
import PreviousButton from "./PreviousButton";
import './game.css';

function Game({playersNames}) {
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
        setXIsNext(i % 2 !== 0);
        setHistory([...history.slice(0, i)]);
    }

    function determineWinner(squares){
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      // loop over the squares and check if any of the winning lines has same value not null 
      for(let i=0; i<lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
          return {
            winner : squares[a],
            winCombination : [a,b,c]
          };
        }
      }
      return {
        winner : null,
        winCombination : null
      };
    }

    function hasGameFinished(squares){
      for(let i=0; i<squares.length ; i++){
        if(!squares[i]){
          return false;
        }else{
          continue;
        }
      }
      return true;
    }

    let gameHasFinished = hasGameFinished(currentSquares);
    let status = 'next Player is ' + (xIsNext ? playersNames.player1 : playersNames.player2);
    let {winner, winCombination} = determineWinner(currentSquares);
    if(winner){
      console.log('the wineeer is ' + winner);
      console.log(winCombination);

      status = 'Game Over, the winner is the Player ' + (winner === 'X' ? playersNames.player1 : playersNames.player2);
    }
    if(gameHasFinished && !winner){
      console.log('game end, no winner');
      status = 'Game Over, No Winner :(';
    }

    function handlePlay(squares){
      if(winner){
        return;
      }
      setHistory([...history, squares]);
      setXIsNext(!xIsNext);
    }


    function resetBoard(){
      setHistory([Array(9).fill(null)]);
      setXIsNext(true);
      setCurrentMove(0);
    }

    
    return (
      <div className="game-container">
        <div className="statut-players">
          <p className="game-status">{status}</p>
          <div className="game-players">
            <h3>{playersNames.player1}</h3>
            {history.length > 1 && (
              <div className="game-info">
                <button onClick={resetBoard}>Reset</button>
                {history.length > 1 &&  <PreviousButton jumpTo = {() => jumpTo(history.length - 1)} text={history.length - 1} /> }
              </div>
            )}
            <h3>{playersNames.player2}</h3>
          </div>
        </div>
        <div className="game-board">
          <Board handlePlay={handlePlay} 
          currentSquares={currentSquares} 
          xIsNext={xIsNext}
          currentMove={currentMove}
          setCurrentMove={setCurrentMove}
          winCombination={winCombination} />
        </div>
      </div>
    );
  }
  export default Game;