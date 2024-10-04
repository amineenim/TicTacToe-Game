import './square.css';

export default function Square({value, onSquareClick, winCombination, index}){

    return(
        <button className={`msquare ${winCombination && winCombination.some((elt) => elt === index) ? 'win' : ''}`}
        onClick={onSquareClick}>{value}</button>
    );
};