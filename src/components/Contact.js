import contacts from '../assets/socialContact';
import React from 'react';
const MyContact = ()=>(
    <div id = 'contact'> 
    <h2>Want to contact !</h2>
    <span>
    {   
    
        contacts.map((con)=>{
            return <Contact {...con}/>
        })
    }
    </span>
    </div>
    
);

const Contact = (props)=>(
  <a href={props.site} target={"_blank"}><img src={props.pic} alt ={props.name} height={100} width={100}></img></a>
);

export default MyContact;