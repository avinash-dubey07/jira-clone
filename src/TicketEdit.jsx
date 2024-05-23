import React from 'react';
import { useState } from 'react';
import "./TicketEdit.css";
import About from './components/About';
import ModalComponent from './components/commons/Modal/Modal';
import { BsFillSendFill } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Stark from "./components/Icons/stark.ico";
import ProgressBar from "react-bootstrap/ProgressBar";
import ticketService from './backend/services/ticket.service';

export default function TicketEdit({ticket, ticketModal}) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  

  const onClickHandler = (clickedOption) => {
    if (clickedOption === "<BsFillSendFill /> Give feedback") {
      setShowAboutModal(true);
    }
  };
  
  const deleteTicket = () => {
    ticketService.deleteTicketInDB(ticket.id);
    ticketModal(false);
    
  }

  return (
    <>
     <div className='Top'>        
      <h2 style={{color:
        "rgb(0, 82, 204)",
      }}>{ticket.issueType}-{ticket.id}</h2>
      <div className='top-btns'> 
         <button onClick={onClickHandler}> <BsFillSendFill /> Give feedback</button>
 <button> <IoIosLink /> Copy link</button>
 <button onClick={deleteTicket}><AiOutlineDelete /></button>
 <button>&times;</button>
 </div>
 <ModalComponent
          show={showAboutModal}
          onHide={() => setShowAboutModal(false)}
          component={<About />}
        />
 </div>
 <div className='base-container'>
 <div style={{width: '60%'}}>
 <div className='ticket-container1'>
       <input className='ss-box' value={ticket.shortSummary} type="text" placeholder='' name='shortSummary' />
     </div>
     <div>
          <span style={{fontSize: '16px', marginLeft: '20px'}}>Description</span>
        </div>
        <div>
          <input
            className='des-box'
            type="text"
            value={ticket.description}
            name="description"
          />
          <div>
          <button className="blue-btn">
          Save
        </button>
        <button className="cancel-btn">Cancel</button>
          </div>
        </div>
        <div>
          <span style={{fontSize: '16px', marginLeft: '20px'}} >Comments</span>
        </div>
        <img style={{ marginLeft: '20px', height:'30px', width:'30px', borderRadius:'20px'}} src={Stark} alt="Icon" />
          <input
            style={{ marginLeft: '20px', width:'69%', height:'40px'}}
            type="text"
            name="comment"
            placeholder='Add a comment...'
          />
         <div>
          <button className="blue-btn" style={{marginLeft:'70px'}}> 
          Save
        </button>
        <button className="cancel-btn">Cancel</button>
          </div>
 </div>
 <div className='ticket-container2'>
   <div style={{marginTop:'10px'}}>
    <label>STATUS</label>
    <div>
    <select
            name="status"
          >
            <option value="selected for development">SELECTED FOR DEVELOPMENT</option>
            <option value="backlog">BACKLOG</option>
            <option value="inProgress">IN PROGRESS</option>
            <option value="done">DONE</option>
          </select>
    </div>
        <div style={{marginTop:'12px'}}>
          <label>ASSIGNEES</label>
        </div>
       <div>
       <select
            name="assignees"
          >
            <option value="1">Deepinder Goyal</option>
            <option value="2">Ashneer Grover</option>
            <option value="3">Aman Gupta</option>
          </select>
       </div>
       <div style={{marginTop:'12px'}}>
          <label>Reporter</label>
        </div>
        <div>
          <select
            name="reporter"
          >
            <option value="1">Deepinder Goyal</option>
            <option value="2">Ashneer Grover</option>
            <option value="3">Aman Gupta</option>
          </select>
        </div>
        <div style={{marginTop:'12px'}}>
          <label>Priority</label>
        </div>
        <div>
          <select
            name="priority"
          >
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div style={{marginTop:'12px'}}>
          <label name="estimateTime">ORIGINAL ESTIMATE (HOURS)</label>
        </div>
        <input type='text' placeholder='Number' style={{width:'90%'}}  />
   </div>
   <label style={{marginTop:'12px'}}>TIME TRACKING</label>
   <div style={{display:'-ms-inline-flexbox'}}>
   <CiStopwatch />
   <ProgressBar style={{width:'90%', height:'6px'}} now={0} />
   </div>
   <div style={{display:'flex', width:'80%', justifyContent:'space-between'}}>
    <p>No time logged</p>
    <p>estimated</p>
   </div>
   
 </div>
 </div>
     </>
  )
}