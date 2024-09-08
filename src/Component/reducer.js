const reducer = (state, action) => {
    // return state;
    switch (action.type) {
      case "GET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_NEWS":
        return {
          ...state,
          isLoading: false,
          hits: action.payload.hits,
          nbPages: action.payload.nbPages,
        };
      case "REMOVE_POST":
        return {
          ...state,
          hits: state.hits.filter(
            (curElem) => curElem.objectID !== action.payload
          ),
        };
      case "SEARCH_POST":
        return {
          ...state,
          query: action.payload,
        };
      case "PREV_PAGE":
        let pageprev =state.page -1;
        if(pageprev <= 0){
           pageprev=0;
        }
        return {
          ...state,
          page: pageprev,
        };
      case "NEXT_PAGE":
        let pagenum = state.page +1;
        if (pagenum >= state.nbPages) {
          pagenum = 0;
        }
        return {
          ...state,
          page: pagenum ,
        };
  
      default:
        break;
    }
  };
  
  export default reducer;
  