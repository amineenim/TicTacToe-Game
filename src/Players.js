
function Players({playersNames, setPlayersNames}){

    function handleNameChange(name, index){
        index === 1 ? setPlayersNames({...playersNames, player1: name}) : setPlayersNames({...playersNames, player2: name});
    }
    return(
        <>
            <h2>Please Enter your Names</h2>
            <input type="text" className="playername-input" 
            value={playersNames.player1} 
            onChange={(e) => handleNameChange(e.target.value, 1)} ></input>
            <input type="text" className="playername-input" 
            value={playersNames.player2} 
            onChange={(e) => handleNameChange(e.target.value, 2)} ></input>
        </>
    );
}

export default Players;