import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const InputSearch = ({ handleChange, query }) => {
  return (
    <div className="relative mt-1 ml-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-3" />
      </div>
      <input
      id="table-search"
        type="text"
        className="border block rounded-lg p-2 bg-gray-200 w-54 pl-10 text-sm font-semibold text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Cari Data"
        onChange={handleChange}
        value={query}
      />
    </div>
  );
};