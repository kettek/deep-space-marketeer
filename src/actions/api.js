import { ACCESS_DENIED, API_ERROR } from "./types";

export const accessDenied = url => ({
  type: ACCESS_DENIED,
    payload: {
      url,
    },
})

export const apiError = error => ({
  type: API_ERROR,
  error,
})
