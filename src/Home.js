import './home.css';

function Home({setScreenToDisplay}){

    function goToPlayersScreen(){
        setScreenToDisplay('players');
    }
    return(
        <div className="container">
            <h4>This is one of my projects<br/>
            it's a simple <strong>TicTacToe Game</strong></h4>
            <button className="start-game"
            onClick={goToPlayersScreen}>Start the Game</button>
        </div>
    )
};

export default Home;