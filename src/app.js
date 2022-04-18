import React from "react";
import ReactDOM from "react-dom";
import Bio from "./components/Bio";
import Copyright from "./components/Copyright";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
const app = document.getElementById('app')
const jsx = (
    <div id='portfolio'>
       <fieldset>
       <Welcome/>
       <Bio/>
       <Projects/> 
       <Copyright/>
       </fieldset>
    </div>  
)
ReactDOM.render(jsx,app)