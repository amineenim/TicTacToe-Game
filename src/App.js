import { useState } from "react";
import Home from "./Home";
import Players from "./Players";
import Game from "./Game";

export default function App(){

    // this component will store all the screens for the App
    // and handle which one to display
    const [screenToDisplay, setScreenToDisplay] = useState('home');
    // state that stores the names of the palyers
    const [playersNames, setPlayersNames] = useState({
        player1 : '',
        player2 : ''
    });

    function displayPlayersScreen(){
        setScreenToDisplay('players');
    }

    return(
        <div>
            { screenToDisplay === 'home' && <Home setScreenToDisplay={setScreenToDisplay} /> }
            { screenToDisplay === 'players' && <Players playersNames={playersNames} setPlayersNames={setPlayersNames} setScreenToDisplay={setScreenToDisplay} />}
            { screenToDisplay === 'game' && <Game playersNames={playersNames} />}
            <button className="clickme" onClick={displayPlayersScreen} >Start The Game</button>
        </div>
    );
}