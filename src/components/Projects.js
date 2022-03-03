import React from "react";
import tictactoe from "../../img/tictactoe.png";
import reactimg from "../../img/react.png"
const projects = ()=>(
    <div id = 'projects'>
        <p>Some of my Projects</p>
        <div id = 'tictactoe' className="project">
            <a href = "https://tictactoenadh.surge.sh/" target={'_blank'}><img src={tictactoe} alt = 'tictactoe image' height ={200} width={200}></img></a>
            <p>A variable sized and variation of the TicTacToe game  </p>
            <a href='https://github.com/amarnadh860/TicTacToe-Variable'>click here to view the project</a>
        </div>

        <div id = 'react' className="project">
            <img src = {reactimg} alt= ' react image'></img>
            <p>A react application on Student Admission System</p>
            <a href='https://github.com/amarnadh860/SAS'>click here to view the project</a>
        </div>

        <div id = 'xyz' className="project">
            <img src ='' ></img>
            <p> some xyz application that does some abc work </p>
            <a href='/'>click here to view the project</a>
        </div>
    </div>
)

export default projects;