import { useEffect, useState } from "react";
import PlayerInput from "./PlayerInput";
import './players.css';

function Players({ playersNames, setPlayersNames, setScreenToDisplay }) {
    const [arePlayersReady, setArePlayersReady] = useState([false, false]);

    useEffect(() => {
        arePlayersReady[0] && arePlayersReady[1] && setScreenToDisplay('game');
    }, [arePlayersReady, setScreenToDisplay]);
    return (
        <div className="players-container">
            <PlayerInput
                playersNames={playersNames}
                setPlayersNames={setPlayersNames}
                playerNumber={1}
                arePlayersReady={arePlayersReady}
                setArePlayersReady={setArePlayersReady}
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
                arePlayersReady={arePlayersReady}
                setArePlayersReady={setArePlayersReady}
            />
        </div>
    );
}

export default Players;
