import './App.css';
import Square from './Square';

function Board({handlePlay, currentSquares, xIsNext, currentMove, setCurrentMove}) {

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
        return squares[a];
      }
    }
    return null;
  }

  let status;
  let winner = determineWinner(currentSquares);
  if(winner){
    status = 'the winner is player ' + winner;
  }else{
    status = 'next player is ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i){
    if(currentSquares[i] || determineWinner(currentSquares)){
      return;
    }
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    console.log(nextSquares);
    console.log('after clicking ' + i)
    setCurrentMove(currentMove++);
    console.log(currentMove);
    handlePlay(nextSquares);
  }


  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square value={currentSquares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={currentSquares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={currentSquares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={currentSquares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={currentSquares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={currentSquares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={currentSquares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={currentSquares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={currentSquares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}

export default Board;
