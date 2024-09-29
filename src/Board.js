import './App.css';
import Square from './Square';

function Board({handlePlay, currentSquares, xIsNext, currentMove, setCurrentMove}) {

  function handleClick(i){
    if(currentSquares[i]){
      return;
    }
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    console.log(nextSquares);
    console.log('after clicking ' + i);
    const nextMove = currentMove + 1;
    setCurrentMove(nextMove);
    console.log(nextMove);
    handlePlay(nextSquares);
  }


  return (
    <div className="App">
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
