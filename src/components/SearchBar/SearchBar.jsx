import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";

export default function SearchBar({ allTickets, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    // if input value is empty / blank, then show all tickets
    if (!e.target.value) {
      setSearchResults(allTickets);
      // Terminate the function after setting search results to all tickets
      return;
    }

    // We got some input text from the user
    // Now i will filter the all tickets
    // Eg: Ticket: {shortSummary: "Avinash", description: "Studious kid"}
    // Eg: searchText = "Avi"
    const searchText = e.target.value;
    const searchResult = allTickets.filter(
      (ticket) =>
        ticket.shortSummary.toLowerCase().includes(searchText.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(searchResult);
  };

  return (
    <header>
      <form className="search-bar" onSubmit={handleSubmit}>
        <label className="search-icon">
          <FcSearch />
        </label>
        <input
          type="search"
          name="search-form"
          placeholder="Search issues by tickets summary....."
          id="ekbek"
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
}
