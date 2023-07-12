import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import GamesContainer from "./Games_container";
import Page404 from "./Page404";

import ct from "../images/ct.jpg";
import gta from "../images/gta5.jpg";
import jc from "../images/jc2.jpg";
import mortal from "../images/mortal.jpg";
import transformer from "../images/transformer.jpg";
import pikachu from "../images/pikachu.jpg";

export default function Games_category_Router() {
  const { id } = useParams("All");

  const games = gamesContent.find((games) => {
    return games.category === id;
  });

  return (
    <>
      <Routes>
        <Route index element={<GamesContainer games={games} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'apikey 6JDqgJjaeSdjWop2kn3Jq9:5mtKVfmjzw8174p9hkctGc');


const url='https://api.collectapi.com/imdb/imdbSearchByName?query=exe'
fetch(url, {
  method: 'GET',
  headers: myHeaders,

  }).then(res=>res.json())
  .then(data=>console.log(data));
  
  

const gamesContent = [
  {
    category: "All",
    contents: [
      { id: 1, name: "counter Strike", image: ct },
      { id: 2, name: "Transformers", image: transformer },
      { id: 3, name: "mortal combat", image: mortal },
      { id: 7, name: "Transformers", image: transformer },
      { id: 8, name: "mortal combat", image: mortal },
      { id: 9, name: "Transformers", image: transformer },
      { id: 10, name: "mortal combat", image: mortal },
      { id: 11, name: "Transformers", image: transformer },
      { id: 12, name: "mortal combat", image: mortal },
      { id: 13, name: "Transformers", image: transformer },
      { id: 14, name: "mortal combat", image: mortal },
    ],
  },
  {
    category: "Action",
    contents: [
      {
        id: 4,
        name: "just cause 2 PC Download",
        image: jc,
        content: `Just Cause 2 is an action video game developed by the Swedish company Avalanche Studios and published by Eidos 
        Interactive and Square Enix. It is the second installment of the 2006 video game Just Cause. Like its predecessor, its
         gameplay is one of total freedom. The action, as well as the plot, takes place in the fictional paradisiacal archipelago 
         of Panau The protagonist is, once again, Rico Rodríguez, the Agency’s most qualified and dangerous agent, who is sent to 
         Panau to eliminate a dissident agent who has taken refuge on the island. Just Cause 2 belongs to the sandbox genre, offering
          total freedom rarely seen in a game of these characteristics. The player has at his disposal more than 1000 square kilometers
           to explore at his will. Although it is possible to request an extraction to move quickly through the large map, the player 
           can drive a wide variety of vehicles to move around the terrain such as mopeds, motorcycles, cars, quads, SUVs, trucks,
            minivans, planes, helicopters, boats or boats, among many others (some of them hidden, like a hot air balloon). 
            Rico Rodriguez, and thus the player, can walk, run, jump, roll, and crouch.`,
            trailer:"https://youtu.be/oTXqYg_S4Ps",
             requirements:{os:"window 7 or above", Memory: "2GB memory space",
          Graphics:"DX10 compatible graphics card with 256 MB of memory (Nvidia GeForce 8800 series/ ATI Radeon HD 2600 Pro)",
          Language:"English and Japanese"
          },
          DownloadLinks:{one:"link 1" ,two:"link 2", three:"link3"},
Comments:["this is nicce"]
      },
      { id: 5, name: "pikachu", image: pikachu },
      { id: 6, name: "Gta 5", image: gta },
      { id: 15, name: "pikachu", image: pikachu },
      { id: 16, name: "Gta 5", image: gta },
      { id: 17, name: "pikachu", image: pikachu },
      { id: 18, name: "Gta 5", image: gta },
      { id: 19, name: "pikachu", image: pikachu },
      { id: 20, name: "Gta 5", image: gta },
      { id: 21, name: "pikachu", image: pikachu },
      { id: 22, name: "Gta 5", image: gta },
      { id: 23, name: "pikachu", image: pikachu },
      { id: 24, name: "Gta 5", image: gta },
      { id: 25, name: "pikachu", image: pikachu },
      { id: 26, name: "Gta 5", image: gta },
      { id: 27, name: "pikachu", image: pikachu },
      { id: 28, name: "Gta 5", image: gta },
      { id: 29, name: "pikachu", image: pikachu },
      { id: 30, name: "Gta 5", image: gta },
    ],
  },
];
