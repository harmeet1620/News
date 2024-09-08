import React from "react";
import { useGlobalhook } from "../Context";
import "./../../App.css";

const Search = () => {
  const { query, searchPost } = useGlobalhook();

  return (
    <>
      <h1 className="text-2xl m-4">Tech News</h1>
      <form 
      onSubmit={(e) => e.preventDefault()}
      >
        
        <div>
          <input
            className="input m-3"
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
