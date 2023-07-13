import React, { useRef ,useState,useEffect} from "react";
import  './assets/css/App.css';
import ResultList from "./assets/components/ResultList";


function App() {

const [searchMovie,setMovieSearch]=useState('fight');
const [printMovie,setMovieDisplay]=useState([]);

const inputRef=useRef();

function onSubmit(e){
e.preventDefault();
setMovieSearch(inputRef.current.value);
inputRef.current.value="";
}
  return (
    <>
    {useEffect(
     ()=>{ 
      console.log("first time run")
      fetchApi(searchMovie)
    },[])
     }

{useEffect(
     ()=>{ 
      console.log("this running")
      fetchApi(searchMovie)},[searchMovie])
     }
        
        <div className="searchBar">
           <form onSubmit={onSubmit}>
    <input type="text" ref={inputRef}></input>
    <button type="submit">Search</button>
          </form>
          </div>
          <ResultList printMovie={printMovie} />
          
    </>
  );

function fetchApi(value){
  fetch(`https://api.collectapi.com/imdb/imdbSearchByName?query=${value}`,
     { headers: {
        authorization:'apikey 39Fctanmruw1AvSmvAdCnK:0W28cnzUVTg8eopZxJ69lQ',
        "Content-Type":"application/json"
      }}
      ).then(res=>res.json()).then(data=>{  
      setMovieDisplay(data.result)
      })
}

}

export default App;
