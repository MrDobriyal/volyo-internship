import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.js"
import React from "react";
import Games_category_Router from "./Games_category_Router.js";
import app from "../styles/app.css"


function App() {
  return (<>
  <Routes>

  <Route path="/" element={<Navbar/>}>
  <Route path="/categories/:id/*" element={<Games_category_Router/>}/>

  <Route path="*" element={<>this page is not yet created ... development proccess</>}/>

  </Route>
  </Routes>
    </>
  
    
  );
  
}





export default App;
