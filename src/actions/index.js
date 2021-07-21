import history from "../history";
import streams from "../apis/streams";

import {
  SIGNED_IN,
  SIGNED_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "./types";

export const userIsSignedIn_AC = (userId) => {
  return {
    type: SIGNED_IN,
    payload: userId
  };
};

export const userIsSignedOut_AC = () => {
  return {
    type: SIGNED_OUT
  };
};

export const addStream_AC = (formValues) => {
  return async function (dispatch, getState) {
    const { userId } = getState().auth;
    const { data } = await streams.post("/streams", { ...formValues, userId });
    dispatch({
      type: CREATE_STREAM,
      payload: data
    });

    history.push("/");
  };
};

export const fetchStreams_AC = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream_AC = (id) => async (dispatch) => {
  const { data } = await streams.get("/streams/" + id);
  dispatch({
    type: FETCH_STREAM,
    payload: data
  });
};

export const editStream_AC = (id, formValues) => async (dispatch) => {
  const { data } = await streams.patch("/streams/" + id, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: data
  });

  history.push("/");
};

export const deleteStream_AC = (id) => async (dispatch) => {
  await streams.delete("/streams/" + id);
  dispatch({
    type: DELETE_STREAM
  });
  history.push("/");
};
