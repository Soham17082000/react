import { Item_Crud, fetch_data, update_data } from "../actionsType";

const initialState = {
  POST_DATA: [],
  loading: false,
  error: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Item_Crud.POSTDATA_SUCCESS:
      return {
        ...state,
        POST_DATA: action.payload,
        loading: false,
        error: null,
      };

    case Item_Crud.POST_DATA:
      return {
        ...state,
        POST_DATA: action.payload,
        loading: true,
        error: null,
      };

    case Item_Crud.POSTDATA_FAILURE:
      return {
        ...state,
        POST_DATA: [],
        loading: false,
        error: action.payload,
      };

    case fetch_data.FETCH_DATA:
      return {
        ...state,
        FETCH_DATA: action.payload,
        loading: true,
        error: null,
      };

    case fetch_data.FETCH_DATA_SUCCESS:
      return {
        ...state,
        FETCH_DATA: action.payload,
        loading: false,
        error: null,
      };

    case fetch_data.FETCH_DATA_FAILURE:
      return {
        ...state,
        FETCH_DATA: [],
        loading: false,
        error: action.payload,
      };

    case update_data.UPDATE_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case update_data.UPDATE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case update_data.UPDATE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;
