import React from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Pagination = ({ pages, handlePageClick, page = 1 }) => {
  return (
    <ReactPaginate
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      previousLabel={
        <FontAwesomeIcon icon={faChevronLeft} className="text-blue-3" />
      }
      nextLabel={
        <FontAwesomeIcon icon={faChevronRight} className="px- text-blue-3" />
      }
      breakLabel={"..."}
      containerClassName={"inline-flex"}
      pageClassName={
        "py-1 px-2.5 text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 hover:rounded-xl"
      }
      nextClassName={
        "py-1 px-2 text-gray-500 bg-white rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
      }
      previousClassName={
        "py-1 px-2 ml-0 text-gray-500 bg-white rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
      }
      breakClassName={
        "py-1 px-2 text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 hover:rounded-xl"
      }
      activeClassName={
        "bg-blue-3 text-white rounded-lg hover:bg-blue-3 hover:!text-white"
      }
      onPageChange={handlePageClick}
      forcePage={page - 1}
    />
  );
};
