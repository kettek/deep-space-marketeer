import {
  FETCH_GALAXY_DETAILS,
  SET_GALAXY_DETAILS
} from "../actions/types";

import * as playerDataReducer from './playerData'

export default function(state = {
    isNetworked: false,
    isLoaded: false,
  }, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_GALAXY_DETAILS:
      return { data: action.payload };
    default:
      return state;
  }
}

export { playerDataReducer }