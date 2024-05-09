import React from 'react';
import ReactSearchBox from "react-search-box";
import { FcSearch } from "react-icons/fc";
import { db } from '../backend/db/mockdb';
import "./SearchIssue.css";


export default function SearchIssue() {



  return (
    <>
    <div className='search-bar'>
    <div>
      <span>
          <label className='search-icon'><FcSearch /></label>
        <input  type="searchbar" placeholder='Search issues by tickets description.....' id="ekbek" />
        {/* <button className='cross-btn'>&times;</button> */}
        </span>
        </div>
      </div>
    
      <div>
        <h5 className='search-tag'>RECENT ISSUES</h5>
{/*        
        <ReactSearchBox
        placeholder="Search issues by tickets description....."
        value=""
        leftIcon={<FcSearch />}
        callback={(record) => console.log(record)}
      /> */}
      </div>
      </>
      
  )
}
