import React from "react";
import profile from '../../img/profilepic.jpg';
let boo = 'false'
class Bio extends React.Component{
   
   state = {toggleBio:false}
   toggleBio = ()=>{
        this.setState(()=>({toggleBio:!this.state.toggleBio}))
    }
    render(){
        
    return (
    <div id = 'bio'>
        <img src ={profile} alt = 'profile picture' id = 'profilepic' ></img>
        <p>Hi there, This is <strong>Amarnadh Kondragunta</strong></p>
        <p>I am a Software Engineer and I am looking for <strong>web development</strong> projects</p>
        <p>My skills are</p>
        <p id = 'skills'>ReactJS, HTML, CSS, JavaScript, Python, Java</p>
        {
            this.state.toggleBio?<ShowMore/>:null
        }
        <button onClick = {this.toggleBio}>{this.state.toggleBio?'Show less':'Show more'}</button>
    </div>
);
    }
}

const ShowMore = ()=>(
     
                      (<div id = 'showInfo'>
                 <p>Graduation in  R.V.R & J.C College of Engineering</p>
                 <p>Previously Worked in the India's top IT company TCS</p>
              </div>)
);


export default Bio;