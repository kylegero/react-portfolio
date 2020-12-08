import React from "react"
import './App.css';
import Thumbnail from './Thumbnail.js';

 
function About(props) {
  return (
    <div>
    <h1>Kyle Pykonen, Web Developer</h1>
    <h2>After this bootcamp, I will be a newly-minted full-stack web developer based in Portland, Oregon.</h2>

<br></br>
      <h1>Contact</h1>
      <h2>You can reach me by email at kylepyk@gmail.com</h2>
      <h2>And by phone at 503-957-8372</h2>
      <h2><a href="https://www.linkedin.com/in/kyle-pykonen-241491b2/" target="_blank">On LinkedIn</a></h2>
      <h2><a href="https://github.com/kylegero" target="_blank">On Github</a></h2>
      <h2><a href="https://docs.google.com/document/d/e/2PACX-1vTGUXSzRq3Vm-f3zIWHeXm8WOWvNAt-46ohZopjIpUqNsxA8tEVvhEJBIQpOLsvpNfoRUa8sCxM9jmk/pub" target="_blank">My resume</a></h2>
    </div>
  )
}
 
export default About;