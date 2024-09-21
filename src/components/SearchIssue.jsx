import React, { useState } from "react";
import "./SearchIssue.css";
import SearchBar from "./SearchBar/SearchBar";
import { useTicketContext } from "../App";
import { RiTaskFill } from "react-icons/ri";
import { FaBug } from "react-icons/fa6";
import { SiStorybook } from "react-icons/si";
import { TfiArrowUp, TfiArrowDown } from "react-icons/tfi";

export default function SearchIssue() {
  const { allTickets } = useTicketContext();
  const [searchResults, setSearchResults] = useState(allTickets);
  const [searchInput, setSearchInput] = useState("");

  let headerText = "RECENT ISSUES";
  if (searchInput) {
    headerText = searchResults.length ? "SEARCH RESULTS" : "NO RESULTS FOUND";
  };

  const getIconForIssueType = (issueType) => {
    switch (issueType) {
      case "Task":
        return <RiTaskFill style={{
          color: "rgb(45, 156, 193)",
          fontSize: "18px",
        }} />;
      case "Bug":
        return <FaBug style={{
          color: "rgb(217, 3, 3)",
          fontSize: "18px",
        }} />;
      case "Story":
        return <SiStorybook style={{
          color: "rgb(3, 133, 3)",
          fontSize: "18px",
        }} />;
      default:
        return null;
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "Urgent":
        return <TfiArrowUp style={{
          color: "rgb(170, 2, 2)",
          fontSize: "14px",
        }} />;
      case "High":
        return <TfiArrowUp  style={{
          color: "rgb(220, 5, 5)",
          fontSize: "14px",
        }} />;
      case "Medium":
        return <TfiArrowDown style={{
          color: "rgb(245, 162, 7)",
          fontSize: "14px",
        }} />;
      case "Low":
        return <TfiArrowDown style={{
          color: "rgb(19, 135, 19)",
          fontSize: "14px",
        }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="search-modal">
        {/* Searchbar needs all tickets, and based on user input, it filters the matching tickets from all tickets */}
        {/* setSearchResults is passed to update the search result tickets in the parent state */}
        <SearchBar
          allTickets={allTickets}
          setSearchResults={setSearchResults}
          setSearchInput={setSearchInput}
        />
        <div>
          <h5 className="search-tag">{headerText}</h5>
        </div>
        <div className="tickets">
          {searchResults.map((ticket) => {
            return (
              <div className="each-ticket" key={ticket.id}>
                {getIconForIssueType(ticket.issueType)}&nbsp;&nbsp;{ticket.shortSummary}&nbsp;&nbsp;{getPriorityIcon(ticket.priority)}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ticket.issueType.toUpperCase()}-{ticket.id}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
