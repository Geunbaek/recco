export const initialState = {
  autoCompleteKeyword: '',
  searchKeyword: '',
  autoCompleteData: [],
  searchResultData: [],
  searchKeywordHistory: [],
  searchKeywordError: '',
};

export const SET_AUTO_COMPLETE_KEYWORD = 'SET_AUTO_COMPLETE_KEYWORD';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';
export const LOAD_AUTO_COMPLETE_DATA_SUCCESS =
  'LOAD_AUTO_COMPLETE_DATA_SUCCESS';
export const CLEAR_AUTO_COMPLETE_DATA = 'CLEAR_AUTO_COMPLETE_DATA';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';
export const SET_SEARCH_KEYWORD_HISTORY = 'SET_SEARCH_KEYWORD_HISTORY';
export const DELETE_SEARCH_KEYWORD_HISTORY = 'DELETE_SEARCH_KEYWORD_HISTORY';

export const setAutoCompleteKeywordAction = (data) => ({
  type: SET_AUTO_COMPLETE_KEYWORD,
  data,
});

export const setSearchKeywordAction = (data) => ({
  type: SET_SEARCH_KEYWORD,
  data,
});

export const loadAutoCompleteDataSuccessAction = (data) => ({
  type: LOAD_AUTO_COMPLETE_DATA_SUCCESS,
  data,
});

export const clearAutoCompleteDataAction = () => ({
  type: CLEAR_AUTO_COMPLETE_DATA,
});

export const loadDataSuccessAction = (data) => ({
  type: LOAD_DATA_SUCCESS,
  data,
});

export const loadDataFailureAction = (error) => ({
  type: LOAD_DATA_FAILURE,
  error,
});

export const setSearchKeywordHistoryAction = (data) => ({
  type: SET_SEARCH_KEYWORD_HISTORY,
  data,
});
export const deleteSearchKeywordHistoryAction = (data) => ({
  type: DELETE_SEARCH_KEYWORD_HISTORY,
  data,
});

const searchKeyword = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTO_COMPLETE_KEYWORD:
      return { ...state, autoCompleteKeyword: action.data };
    case LOAD_AUTO_COMPLETE_DATA_SUCCESS:
      console.log(action.data);
      const result = [...action.data.productList, ...action.data.brandList];
      console.log(result);
      return { ...state, autoCompleteData: result };
    case CLEAR_AUTO_COMPLETE_DATA:
      return { ...state, autoCompleteData: [] };
    case SET_SEARCH_KEYWORD:
      return { ...state, searchKeyword: action.data };
    case LOAD_DATA_SUCCESS:
      return { ...state, searchResultData: action.data };
    case LOAD_DATA_FAILURE:
      return { ...state, searchKeywordError: action.error };
    case DELETE_SEARCH_KEYWORD_HISTORY:
      const keywords = [...state.searchKeywordHistory];
      keywords.splice(parseInt(action.data), 1);
      return { ...state, searchKeywordHistory: keywords };
    default:
      return state;
  }
};

export default searchKeyword;
