import axios from "axios";

export const GET_REQUEST = "GET_REQUEST";
export const GET_FAILURE = "GET_FAILURE";
export const GET_SUCCESS = "GET_SUCCESS";

export const getRequest = () => ({
  type: GET_REQUEST,
});
export const getSuccess = (payload) => ({
  type: GET_SUCCESS,
  payload,
});
export const getFailure = () => ({
  type: GET_FAILURE,
});

export const getProductsData = (dispatch) => {
  dispatch(getRequest());
  axios
    .get("http://localhost:8080/Product")
    .then((res) =>
      dispatch({
        type: getSuccess,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(getFailure(err.message)));
}
