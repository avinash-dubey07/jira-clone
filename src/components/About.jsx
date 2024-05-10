import React from 'react'
import "./About.css";
import feedback from "./images/feed.jpg";
import { FaGithub } from "react-icons/fa";


export default function About() {
  return (
    <>
    <div>
    <img className='fb-img' src={feedback} alt="Feedback Image" />
    <p className='para'> This simplified Jira clone is built with React Js.</p>
    </div>
    <div>
      <p className='para'>Read more on my website or reach out via
        <a href="https://github.com/#:~:text=avinash%2Ddubey07/jira%2Dclone">
          <strong className='userid'> avinash-dubey07</strong>
          </a> 
          </p>
    </div>
    <div className='about-btns'>
    <button type="button" class="btn btn-primary">View Website</button>
    <button className="repo2-btn"> <FaGithub /> Github Repo </button>
    </div>
    </>
  )
}
