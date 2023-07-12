import React from "react"
import { Link } from "react-router-dom"

export default function Categories(){

return(<>

          <Link to="/categories/All">All</Link>
          <Link to="/categories/Action">Action</Link>
          <Link to="/categories/sports">Sports</Link>
          <Link to="/categories/Racing">Racing</Link>
          <Link to="/categories/Fighting">Fighting</Link>
          <Link to="/categories/Horror">Horror</Link>
          <Link to="/categories/Anime">Anime</Link>
          <Link to="/categories/Puzzle">Puzzle</Link>
          <Link to="/categories/Article">Article</Link>
          <Link to="/categories/2d">2d</Link>
          <Link to="/categories/Casual">Casual</Link>
          <Link to="/categories/Simulation">Simulation</Link>
          <Link to="/categories/FPS">FPS</Link>
          <Link to="/categories/RPG">RPG</Link>  

</>)

}