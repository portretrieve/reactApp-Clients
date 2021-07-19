import _ from "lodash";

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return _.mapKeys(action.payload, "id");
    //   let newObject = {};
    //   action.payload.forEach(
    //     (stream) => (newObject = { ...newObject, [stream.id]: stream })
    //   );
    //   return newObject;

    default:
      return state;
  }
};
