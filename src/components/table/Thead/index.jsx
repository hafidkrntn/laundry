import React from "react";
import { SortDownIcon, SortUpIcon, SortIcon } from "../sortTable";

const Thead = ({ className }) => {
  const Header = ["No", "NAMA", "ALAMAT", "NO HP", "AKSI"];
  return (
    <thead className="text-black">
      <tr>
        {Header.map((items, key) => (
          <th className={`${className} py-3 bg-gray-600 uppercase`} key={key}>
            {items}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;