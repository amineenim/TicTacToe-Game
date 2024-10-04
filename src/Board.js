import Square from './Square';
import './board.css';

function Board({handlePlay, currentSquares, xIsNext, currentMove, setCurrentMove, winCombination}) {
  
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
    <div className="board">
        <Square value={currentSquares[0]} index={0} onSquareClick={() => handleClick(0)} winCombination={winCombination} />
        <Square value={currentSquares[1]} index={1} onSquareClick={() => handleClick(1)} winCombination={winCombination} />
        <Square value={currentSquares[2]} index={2} onSquareClick={() => handleClick(2)} winCombination={winCombination} />
        <Square value={currentSquares[3]} index={3} onSquareClick={() => handleClick(3)} winCombination={winCombination} />
        <Square value={currentSquares[4]} index={4} onSquareClick={() => handleClick(4)} winCombination={winCombination} />
        <Square value={currentSquares[5]} index={5} onSquareClick={() => handleClick(5)} winCombination={winCombination} />
        <Square value={currentSquares[6]} index={6} onSquareClick={() => handleClick(6)} winCombination={winCombination} />
        <Square value={currentSquares[7]} index={7} onSquareClick={() => handleClick(7)} winCombination={winCombination} />
        <Square value={currentSquares[8]} index={8} onSquareClick={() => handleClick(8)} winCombination={winCombination} />
    </div>
  );
}

export default Board;
