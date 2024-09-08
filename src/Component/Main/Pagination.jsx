import React from "react";
import { useGlobalhook } from "../Context";

const Pagination = () => {
  const { nbPages, page, getPrevPage, getNextPage } = useGlobalhook();
  return (
    <>
      <div className="pagination-btn">
        <button className="buttons" onClick={() => getPrevPage()}>
          Prev
        </button>
        <p>
          {page + 1} to {nbPages}
        </p>

        <button className="buttons" onClick={() => getNextPage()}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
