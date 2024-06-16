import React, { useContext, useEffect, useState } from "react";
import "./SearchIssue.css";
import SearchBar from "./SearchBar/SearchBar";
import { useTicketContext } from "../App";

export default function SearchIssue() {
  const { allTickets } = useTicketContext();
  const [searchResults, setSearchResults] = useState(allTickets);
  const [searchInput, setSearchInput] = useState("");

  let headerText = "RECENT ISSUES";
  if (searchInput) {
    headerText = searchResults.length ? "SEARCH RESULTS" : "NO RESULTS FOUND";
  }

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
                {ticket.shortSummary}
                <br />
                {ticket.issueType.toUpperCase()}-{ticket.id}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
