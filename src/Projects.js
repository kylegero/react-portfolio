import React from "react"
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link='/https://github.com/mslee001/StarPlannr'
        image="https://snipboard.io/7OCN5u.jpg"
        title="StarPlannr"
        category="Astronomy"
      />
      <Thumbnail
        link="https://github.com/kylegero/HW_5"
        image="https://snipboard.io/wDWhy0.jpg"
        title="Workday Scheduler"
        category="Planning"
      />
      <Thumbnail
        link='https://github.com/clydeclark/parrot-passion/'
        image="https://snipboard.io/1CdT5w.jpg"
        title="Parrot Passion"
        category="Ecommerce"
      />
      <Thumbnail
        link='https://github.com/kylegero/Homework_Week_3'
        image="https://snipboard.io/CVoZe7.jpg"
        title="Password Generator"
        category="Passwords"
      />


    <p>I've also worked on a < a href="https://github.com/kylegero/WK9_HW_Readme_Generator" class="card-link" target="_blank">readme generator</a></p>
    <p>And a <a href="https://github.com/kylegero/Template_Engine-Employee_Summary" class="card-link" target="_blank">template engine for employee summaries</a><br></br></p>
    </div>
  )
}
 
export default Projects;