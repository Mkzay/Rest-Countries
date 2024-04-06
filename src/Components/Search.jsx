/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex flex-row-reverse items-center justify-center px-3 mx-2.5 shadow-lg"
    >
      <input
        className="bg-white w-full h-[3.7rem] p-4 text-veryDarkBlue text-lg font-semibold placeholder:font-light placeholder:text-base placeholder:text-darkGray dark:text-white dark:bg-darkBlue outline-none"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a country..."
      />
      <button
        className="p-4 h-[3.7rem] bg-white text-darkGray dark:text-white dark:bg-darkBlue"
        type="submit"
      >
        <FontAwesomeIcon
          className="text-darkGray dark:text-white"
          icon={faMagnifyingGlass}
        />
      </button>
    </form>
  );
};

export default Search;
