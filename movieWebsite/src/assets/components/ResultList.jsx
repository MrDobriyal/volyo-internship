import React from 'react'
import Result from './Result'
export default function ResultList({printMovie}) {
  return (<>
  <div className='resultList_grid'>
    {printMovie.map(result=><Result result={result} key={result.imdbID}/>)}
  </div>
  </>
  )
}
