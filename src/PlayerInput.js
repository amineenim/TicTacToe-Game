import { useEffect, useState } from "react";
import checkedIcon from './assets/check.svg';

function PlayerInput({playerNumber, setPlayersNames, playersNames, arePlayersReady, setArePlayersReady, playerInputRef}){
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(playerNumber === 1){
            playerInputRef && playerInputRef.current.focus();
        }
    }, [playerNumber, playerInputRef]);

    function onPlayerReady(){
        let playersReadiness = arePlayersReady.slice();
        if(playerNumber === 1){
            // if the state is still empty set his name by default
            if(playersNames.player1 === ''){
                setPlayersNames({...playersNames, player1 : "Player1"});
            }
            playersReadiness[0] = true;
        }else{
            if(playersNames.player2 === ''){
                setPlayersNames({...playersNames, player2: "Player2"});
            }
            playersReadiness[1] = true;
        }
        setArePlayersReady(playersReadiness);
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
            <label htmlFor="playername">Votre nom/pseudo : </label>
            <input ref={playerInputRef} type="text" id="playername" className="playername-input" 
            value={playerNumber === 1 ? playersNames.player1 : playersNames.player2 } 
            onChange={(e) => handleNameChange(e.target.value)} 
            placeholder={playerNumber === 1 ? 'Player1' : 'Player2' }></input>
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
            {arePlayersReady[playerNumber - 1] && <img src={checkedIcon} 
            height="20px" width="20px" alt="checked icon"/>}
            <button className="ready-button" onClick={onPlayerReady}
            disabled={errors.length !== 0 || arePlayersReady[playerNumber - 1]}>Ready</button>
        </div>
    );
}
export default PlayerInput;