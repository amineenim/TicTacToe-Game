import { useState } from "react";
import Home from "./Home";
import Players from "./Players";
import Game from "./Game";
import './App.css';

export default function App(){

    // this component will store all the screens for the App
    // and handle which one to display
    const [screenToDisplay, setScreenToDisplay] = useState('home');
    // state that stores the names of the palyers
    const [playersNames, setPlayersNames] = useState({
        player1 : '',
        player2 : ''
    });

    return(
        <div className="app">
            { screenToDisplay === 'home' && <Home setScreenToDisplay={setScreenToDisplay} /> }
            { screenToDisplay === 'players' && <Players playersNames={playersNames} setPlayersNames={setPlayersNames} setScreenToDisplay={setScreenToDisplay} />}
            { screenToDisplay === 'game' && <Game playersNames={playersNames} />}
        </div>
    );
}