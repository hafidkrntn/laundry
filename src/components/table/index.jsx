import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";
import { Pagination } from "../pagination/index";

export default function Table({
  className,
  status,
  columnTable,
  data,
  dataId,
  handleDataId,
  total,
  pages,
  page,
  from,
  limit,
  handlePageClick,
  actionNotDisplay,
  handleFilterLimit,
  handleSortTable,
  options,
  footerNone = false,
  setInputTable = false,
  handleChangeDataTable,
  badge,
}) {
  return (
    <>
      <div className="relative h-[70vh] overflow-x-auto sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 ">
          <Thead
            className={className}
            columnTable={columnTable}
            handleSortTable={handleSortTable}
            actionNotDisplay={actionNotDisplay}
          />
          <Tbody
            setInputTable={setInputTable}
            options={options}
            status={status}
            data={data}
            dataId={dataId}
            handleDataId={handleDataId}
            columnTable={columnTable}
            actionNotDisplay={actionNotDisplay}
            handleChangeDataTable={handleChangeDataTable}
            from={from}
            badge={badge}
          />
        </table>
        {footerNone ? (
          ""
        ) : (
          <div className="sticky bottom-0 mt-7 flex bg-white text-sm text-gray-3">
            <p className="my-auto mr-6">
              {from && (
                <>
                  Menampilkan {from} - {+from + +limit - 1} Dari {total} Data`
                </>
              )}
            </p>
            <Pagination
              pages={pages}
              handlePageClick={handlePageClick}
              page={page}
            />
            <div className="ml-auto flex h-8 justify-center p-1">
              <p className="m-auto text-sm -tracking-wide text-gray-3">
                Tampilkan
              </p>
              <select
                onChange={(e) => {
                  handleFilterLimit(e.target.value);
                }}
                className="text-blue-3 outline-none"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
              <p className="m-auto text-sm -tracking-wide text-gray-3">Data</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
