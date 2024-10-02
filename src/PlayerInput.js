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

    function validateName(name){
        const trimmedName = name.trim();
        const regex = /^[a-zA-Z0-9\s]*$/;
        let allErrors = errors.slice();

        if(!trimmedName){
            setErrors([]);
            return;
        }
        if(!regex.test(name)){
            if(!allErrors.some((error) => Object.keys(error)[0] === 'regex')){
                allErrors = [...allErrors, {'regex' : 'Only characters and spaces are allowed'}];
            }
        }else{
            // filter the errors object and remove the object with key regex
            allErrors = allErrors.filter((errorObj) => {
                return Object.keys(errorObj)[0] !== 'regex';
            });
        }
        if(/^[0-9\s]*$/.test(name)){
            if(!allErrors.some(error => Object.keys(error)[0] === 'numbers')){  
                allErrors = [...allErrors, {'numbers' : 'The name can not contain numbers only, add characters'}];
            }
        }else{
            allErrors = allErrors.filter((errorObj) => {
                return Object.keys(errorObj)[0] !== 'numbers';
            });
        }
        if(trimmedName.length < 3){
            if(!allErrors.some(error => Object.keys(error)[0] === 'length')){
                allErrors = [...allErrors, {'length' : 'the name must have 3 charcters minimum'}];
            }
        }else{
            allErrors = allErrors.filter((errorObj) => {
                return Object.keys(errorObj)[0] !== 'length';
            });
        }
        setErrors(allErrors);
    }

    function handleNameChange(name){
        validateName(name);
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
                errors.length >= 1 && (
                    errors.map((error) => {
                        let keyName = Object.keys(error)[0];
                        return (
                            <p key={keyName} className="error-message">{error[keyName]}</p>
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