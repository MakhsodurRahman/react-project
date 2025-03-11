import { useEffect, useState } from "react";
import Player from "../Player/Player";
import  './Players.css'

const Players = ({handleSelectedPlayer}) => {
    const [players,setPlayers] = useState([]);

    useEffect(()=>{
        fetch('/public/Player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[]);

    return (
        <div>
            <div className="player-container">
            {
                players.map(player => <Player key={player.name} player={player} handleSelectedPlayer={handleSelectedPlayer}></Player>)
            }
        </div>
        </div>
    );
};

export default Players;