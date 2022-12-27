import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const InputSearch = ({ handleChange, query, placeholder }) => {
  return (
    <div className="relative w-fit rounded">
      <button className="absolute right-4 top-2">
        {/* <BsSearch className="scale-150" /> */}
        <FontAwesomeIcon icon={faSearch} className="scale-125" />
      </button>
      <input
        type="search"
        className="border rounded-lg p-2 bg-gray-200"
        placeholder={placeholder}
      />
    </div>
  );
};