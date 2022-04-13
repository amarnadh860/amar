import React from "react";
import tictactoe from "../../img/tictactoe.png";
import reactimg from "../../img/react.png"
import portfolio from "../../img/portfolio.png"
const projects = ()=>(
    <div id = "projects-section">
        <h2>Some of my projects</h2>
        <div id = 'projects'>
            <div id = 'tictactoe' className="project">
               <a href = "https://tictactoenadh.surge.sh/" target={'_blank'}><img src={tictactoe} alt = 'tictactoe image'></img></a>
               <p>A variable sized and variation of the TicTacToe game  </p>
               <a href='https://github.com/amarnadh860/TicTacToe-Variable'>click here to view the project</a>
            </div>

             <div id = 'react' className="project">
                <img src = {reactimg} alt= ' react image'></img>
                <p>A react application on Student Admission System</p>
                <a href='https://github.com/amarnadh860/SAS'>click here to view the project</a>
             </div>

            <div id = 'xyz' className="project">
               <img src ={portfolio} ></img>
               <p>Code for this Portfolio site done using react</p>
               <a href='https://github.com/amarnadh860/amar'>click here to view the project</a>
            </div>
        </div>
    </div>
    
)

export default projects;