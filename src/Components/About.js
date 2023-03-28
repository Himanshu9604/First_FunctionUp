import React from 'react'
import './About.css'
import Image2 from '../Components/Himanshu1.jpeg'
function About() {
  return (
    <div>
        <div className='Info'>
        <h1>About Us</h1>
        <img src={Image2}/>
        <h5>Age:22 <br></br> Location:India</h5>
        <p>Hello My Name is Himanshu Yadav. I am From Maharashtra . Coming to my educational background I have done my graduation in B.E. in IT in 2022. <br></br>I have knowledge of html,css,javascript and React-JS.Now  I am in Function up Cohort and  I learn React-JS currently It's to much intresting language for biginners. My hobbies are playing Cricket and learn new things.</p>
      </div>
    </div>
  )
}

export default About