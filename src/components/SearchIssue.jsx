import React, { useContext, useEffect, useState } from "react";
import "./SearchIssue.css";
import SearchBar from "./SearchBar/SearchBar";
import { useTicketContext } from "../App";

export default function SearchIssue() {
  const { allTickets } = useTicketContext();
  const [searchResults, setSearchResults] = useState(allTickets);

  return (
    <>
      {/* Searchbar needs all tickets, and based on user input, it filters the matching tickets from all tickets */}
      {/* setSearchResults is passed to update the search result tickets in the parent state */}
      <SearchBar allTickets={allTickets} setSearchResults={setSearchResults} />
      <div>
        <h5 className="search-tag">RECENT ISSUES</h5>
      </div>
      <div className="tickets">
        {searchResults.map((ticket) => {
          return (
            <li>
              {ticket.shortSummary}
              <br /> &nbsp;&nbsp; &nbsp;&nbsp;{ticket.issueType.toUpperCase()}-
              {ticket.id}
            </li>
          );
        })}
      </div>
    </>
  );
}
