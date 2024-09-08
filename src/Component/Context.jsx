import React, { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const api = "http://hn.algolia.com/api/v1/search?";
const instialState = {
  isLoading: true,
  query: "CSS",
  nbPages: 0,
  page: 0,
  hits: [],
};

export const Appcontext = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, instialState);

  const fetchNews = async (url) => {
    dispatch({ type: "GET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_NEWS",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const removePost = (objectID) => {
    // console.log(objectID, "hiiiiiiiiggggg");
    dispatch({
      type: "REMOVE_POST",
      payload: objectID,
    });
  };

  const searchPost = (searchdata) => {
    console.log("heelo");
    dispatch({ type: "SEARCH_POST", payload: searchdata });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  useEffect(() => {
    fetchNews(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <Appcontext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalhook = () => {
  return useContext(Appcontext);
};

// export default Context
