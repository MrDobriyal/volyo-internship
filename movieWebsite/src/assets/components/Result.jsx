import React from "react"

export default function Result({result}){
    return(<>

    <div className="result_flex">
      <div><img src={result.Poster}/></div>
      <div >{result.Title}</div>
      <div >{result.Year}</div>
    </div>

    </>)

}