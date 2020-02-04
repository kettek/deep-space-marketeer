import {
  API_START,
  API_END,
  FETCH_GALAXY,
  SET_GALAXY_DETAILS
} from "../actions/types";

export default function(state = {
    isNetworked: false,
    isLoaded: false,
  }, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_GALAXY_DETAILS:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_GALAXY) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_GALAXY) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
