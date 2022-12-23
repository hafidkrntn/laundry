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
        type="text"
        id="table-search"
        className="w-54 block rounded-lg border border-gray-300 p-2  pl-10 text-sm font-semibold text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        placeholder="Cari Data"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};
