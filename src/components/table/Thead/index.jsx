import React from "react";
import { SortDownIcon, SortUpIcon, SortIcon } from "../sortTable";
export const Thead = ({
  className,
  columnTable,
  handleSortTable,
  actionNotDisplay,
}) => {
  return (
    <thead className="sticky top-0 border bg-gray-50 text-xs uppercase text-gray-700 shadow-md">
      <tr className="border">
        <th scope="col" className="border py-3 px-6 text-center">
          NO
        </th>
        {columnTable.map((item, index) => (
          <th
            scope="col"
            className="group py-3 px-6 text-left"
            key={index}
            onClick={() => {
              if(item?.sortable) handleSortTable(index);
            }}
          >
            <div className="flex items-center justify-between">
              {item.name}
              <span>
                {
                  !item?.sortable ? (
                    ""
                  ) : item?.sortbyOrder === "desc" ? (
                    <SortDownIcon className="h-4 w-4 text-gray-400" />
                  ) : item?.sortbyOrder === "asc" ? (
                    <SortUpIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <SortIcon className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                  )
                }
              </span>
            </div>
          </th>
        ))}
        {!actionNotDisplay && (
          <th scope="col" className={`border py-3 text-center ${className}`}>
            AKSI
          </th>
        )}
      </tr>
    </thead>
  );
};

export default Thead;
