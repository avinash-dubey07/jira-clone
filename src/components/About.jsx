import React from 'react';
import { useNavigate } from "react-router-dom";
import "./About.css";
import feedback from "./images/feed.jpg";
import { FaGithub } from "react-icons/fa";


export default function About() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `https://github.com/avinash-dubey07/jira-clone`; 
    navigate(path);
  }

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
    <button className="repo2-btn" onClick={routeChange}> <FaGithub /> Github Repo </button>
    </div>
    </>
  )
}
