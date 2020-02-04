import { API, FETCH_GALAXY, SET_GALAXY_DETAILS } from "./types";

export function fetchGalaxy() {
  return apiAction({
    url: "galaxy",
    onSuccess: setGalaxyDetails,
    onFailure: () => console.log("Error occured loading galaxy"),
    label: FETCH_GALAXY,
  });
}

function setGalaxyDetails(data) {
  return {
    type: SET_GALAXY_DETAILS,
    payload: data,
  }
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
