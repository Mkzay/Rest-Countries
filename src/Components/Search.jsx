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
      className="flex flex-row-reverse items-center justify-center p-3"
    >
      <input
        className="bg-white w-full p-4 text-veryDarkBlue text-lg font-light placeholder:text-base placeholder:text-darkGray dark:text-white dark:bg-veryDarkBlue outline-none"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for a country..."
      />
      <button
        className="p-4 bg-white text-darkGray dark:text-white dark:bg-veryDarkBlue"
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
