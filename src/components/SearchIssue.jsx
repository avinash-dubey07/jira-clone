import React, { useEffect, useState } from "react";
import "./SearchIssue.css";
import SearchBar from "./SearchBar/SearchBar";
import { sampleTicketDetails } from "../backend/db/sampleTickets";
import ListPage from "./SearchBar/ListPage";

export default function SearchIssue({ tickets }) {
  const [searchResults, setSearchResults] = useState(sampleTicketDetails);

  return (
    <>
      {/* Searchbar needs all tickets, and based on user input, it filters the matching tickets from all tickets */}
      {/* setSearchResults is passed to update the search result tickets in the parent state */}
      <SearchBar
        allTickets={sampleTicketDetails}
        setSearchResults={setSearchResults}
      />
      {/* <div>
        <h5 className="search-tag">RECENT ISSUES</h5>
        <ListPage searchResults={searchResults} />
      </div> */}
      <div>
        {searchResults.map((ticket) => {
          return <li>{ticket.shortSummary}</li>;
        })}
      </div>
    </>
  );
}
