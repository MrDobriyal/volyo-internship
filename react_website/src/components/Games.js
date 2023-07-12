import React from "react"
import { Link } from "react-router-dom";

export default function Games({game}){
    const gameName=(game.name).replace(/\s/g, '');
    
    return(<>
    <Link to={`/categories/${gameName}`} >
    <div className="game_flex">
    <img src={game.image} style={{width:"300px",height:"300px"}} alt="404 error"/>
    <div>{game.name}</div>
    </div>
   
    </Link>
    </>)
}