import { useEffect, useRef, useState } from "react";
import PlayerInput from "./PlayerInput";
import './players.css';

function Players({ playersNames, setPlayersNames, setScreenToDisplay }) {
    const [arePlayersReady, setArePlayersReady] = useState([false, false]);
    const [countDown, setCountDown] = useState(null);

    let player1inputRef = useRef();
    let player2inputRef = useRef();
    
    // this function handles the animation and decrementing the countDown
    useEffect(() => {
        if(countDown === null) return;
        if(countDown > 0){
            const timer = setTimeout(() => setCountDown(prevCountDown => prevCountDown - 1), 1000);
            return () => clearTimeout(timer);
        }else{
            setScreenToDisplay('game');
        }
    }, [countDown, setScreenToDisplay]);

    useEffect(() => {
        if(arePlayersReady[0] && arePlayersReady[1]){
            //setScreenToDisplay('game');
            setCountDown(3);
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
                {arePlayersReady[0] && arePlayersReady[1] && <h2>{playersNames.player1} VS {playersNames.player2}</h2>}
                {!arePlayersReady[0] || !arePlayersReady[1] ? <h2>Player1 VS Player2</h2> : null}

                {countDown !== null && (
                    <>
                        <p className="countdown-message">Starting in {countDown}</p>
                        <div className="countdown-rectangles">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`rectangle ${countDown >= i+1 ? 'filled' : ''}`}
                                ></div>
                            ))}
                        </div>
                    </>
                )}
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
