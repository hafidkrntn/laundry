import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const InputSearch = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.nama.toLowerCase().includes(searchWord.toLowerCase());
    });


    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="relative mt-1 ml-2">
      <div className="hidden pointer-events-none absolute inset-y-0 left-0 items-center pl-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-3" />
      </div>
      <input
        id="table-search"
        type="text"
        className="border block rounded-lg p-2 bg-gray-200 w-54 pl-10 text-sm font-semibold text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Cari Data"
        onChange={handleFilter}
        value={wordEntered}
      />
      <div>
        {filteredData.length != 0 && (
          <div className="text-2xl">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="mt-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table
                    className="w-full text-sm text-left text-black"
                    href={value.link}
                    target="_blank"
                  >
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Alamat
                        </th>
                        <th scope="col" className="px-6 py-3">
                          No. Handphone
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b text-black">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {value.nama}
                        </th>
                        <td className="px-6 py-4">{value.alamat}</td>
                        <td className="px-6 py-4">{value.handphone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
