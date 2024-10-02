import { useEffect, useRef, useState } from "react";

function PlayerInput({playerNumber, setPlayersNames, playersNames}){
    const [errors, setErrors] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        if(playerNumber === 1){
            inputRef.current.focus();
        }
    }, [playerNumber]);

    function onPlayerReady(){
        console.log('player ' + playerNumber + ' is ready');
    }

    function handleNameChange(name){
        // trim the name provided
        const trimmedName = name.trim();
        const regex = /^[a-zA-Z\s]*$/;

        if(trimmedName && !regex.test(name)){
            setErrors([...errors, 'Only charcters and spaces are allowed']);
        }
        if(trimmedName && /^[0-9\s]*$/.test(name)){
            setErrors([...errors, 'name must have characters'])
        }
        if(trimmedName && trimmedName.length<3){
            setErrors([...errors, 'Name must be at least 3 characters long'])
        }

        if(playerNumber === 1){
            setPlayersNames({...playersNames, player1: name});
            return;
        }
        setPlayersNames({...playersNames, player2: name});
    }

    return (
        <div className="player-view">
            <input ref={inputRef} type="text" className="playername-input" 
            value={playerNumber === 1 ? playersNames.player1 : playersNames.player2 } 
            onChange={(e) => handleNameChange(e.target.value)} 
            placeholder="Enter your Name here"></input>
            {
                errors.length > 1 && (
                    errors.map((error, index) => {
                        return (
                            <p key={index} className="error-message">{error}</p>
                        )
                    })
                )
            }
            <h4>{playerNumber === 1 ? playersNames.player1 : playersNames.player2 }</h4>
            <button className="ready-button" onClick={onPlayerReady}>Ready</button>
            <btton className="skip-button">Skip</btton>
        </div>
    );
}
export default PlayerInput;