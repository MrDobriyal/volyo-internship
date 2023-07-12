import React from "react"
import Games from "./Games"
export default function GamesContainer({games}){

  return(<div className="games_container_Flex">

{games.contents.map(game => {return <Games key={game.id} game={game}/>})}
      

    </div>)
   
    

}