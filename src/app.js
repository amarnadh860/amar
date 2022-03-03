import React from "react";
import ReactDOM from "react-dom";
import Bio from "./components/Bio";
import Projects from "./components/Projects"
import MyContact from "./components/Contact";
const app = document.getElementById('app')
const jsx = (
    <div id='portfolio'>
       <fieldset>
       <Bio/>
       <hr/>
       <Projects/> 
       <hr/>
       <MyContact/>
       </fieldset>
    </div>  
)
ReactDOM.render(jsx,app)