import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./Action";

const initState = { data: [], isLoading: false, isError: false };

export const getDataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    default:
      return state;
  }
};;
