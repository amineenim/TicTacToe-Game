import { useEffect, useRef, useState } from "react";
import PlayerInput from "./PlayerInput";
import './players.css';

function Players({ playersNames, setPlayersNames, setScreenToDisplay }) {
    const [arePlayersReady, setArePlayersReady] = useState([false, false]);
    let player1inputRef = useRef();
    let player2inputRef = useRef();

    useEffect(() => {
        if(arePlayersReady[0] && arePlayersReady[1]){
            //setScreenToDisplay('game');
            console.log("game screen")
            return;
        }
        if(!arePlayersReady[0]){
            player1inputRef.current.focus();
        }else{
            player2inputRef.current.focus();
        }

    }, [arePlayersReady, setScreenToDisplay]);

    return (
        <div className="players-container">
            <PlayerInput
                playersNames={playersNames}
                setPlayersNames={setPlayersNames}
                playerNumber={1}
                arePlayersReady={arePlayersReady}
                setArePlayersReady={setArePlayersReady}
                playerInputRef={player1inputRef}
            />
            <div className="vs-container">
                {
                    arePlayersReady[0] && arePlayersReady[1] && <h2>{playersNames.player1} VS {playersNames.player2}</h2> 
                }
                {
                   (!arePlayersReady[0] || !arePlayersReady[1]) && <h2>Player1 VS Player2</h2>
                }
            </div>
            <PlayerInput
                playersNames={playersNames}
                setPlayersNames={setPlayersNames}
                playerNumber={2}
                arePlayersReady={arePlayersReady}
                setArePlayersReady={setArePlayersReady}
                playerInputRef={player2inputRef}
            />
        </div>
    );
}

export default Players;
