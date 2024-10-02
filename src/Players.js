import PlayerInput from "./PlayerInput";
import './players.css';

function Players({ playersNames, setPlayersNames }) {
    const defaults = {player1 : "Player 1", player2: "Player 2"};
    return (
        <div className="players-container">
            <PlayerInput
                playersNames={playersNames}
                setPlayersNames={setPlayersNames}
                playerNumber={1}
            />
            <div className="vs-container">
                <h2>Player 1 VS Player 2</h2>
                <button className="start-game-button" disabled>
                    Start Game
                </button>
            </div>
            <PlayerInput
                playersNames={playersNames}
                setPlayersNames={setPlayersNames}
                playerNumber={2}
            />
        </div>
    );
}

export default Players;
