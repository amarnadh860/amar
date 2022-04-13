import React from "react";
import profile from '../../img/profilepic.jpg';
import Contact from './Contact';
let boo = 'false'
class Bio extends React.Component{
   
   state = {toggleBio:false}
   toggleBio = ()=>{
        this.setState(()=>({toggleBio:!this.state.toggleBio}))
    }
    render(){
        
    return (
    <div id = 'bio'>
        <div id="profile-card">
            <div>
                <img src ={profile} alt = 'profile picture' id = 'profilepic' />
                <h1>Amarnadh</h1>
                <h2>Web developer</h2>
                <Contact />
            </div>
            {/*<div>
                <h2>Want to Contact me!</h2>
                <h3><a href = " https://www.linkedin.com/in/amarnadh-kondragunta" target="_blank">Linkedin</a></h3>
                <h3><a href = " mailto:amarnadh6904@gmail.com" target="_blank">Gmail</a></h3>
                <h3><a href = " https://github.com/amarnadh860" target="_blank">Github</a></h3>
    </div>*/}
                

        </div>

        <div id = "profile-details">
            <p>Hi there, This is <strong>Amarnadh Kondragunta</strong></p>
            <p>I am a passionate software engineer who loves to code in <strong>javascript and react</strong> for front end</p>
            <p>Loves to code in <strong>Java and python</strong> for backend</p>
            <p>Always tries to learn something new every day</p>
            <p>My skills are</p>
            <p id = 'skills'>ReactJS, HTML, CSS, JavaScript, Python, Java</p>
            <p>My ultimate goal is to become a proficient <strong>full stack developer</strong></p>
             {
              this.state.toggleBio?<ShowMore/>:null
             }
             <button onClick = {this.toggleBio}>{this.state.toggleBio?'Show less':'Show more'}</button>
        </div>

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