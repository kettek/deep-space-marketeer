import { API } from '../actions/types'
import { accessDenied, apiError } from '../actions/api'

const apiMiddleware = ({dispatch}) => next => action => {
  next(action)

  if (action.type !== API) return
  console.log(action)

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // get data
  setTimeout(() => {
    dispatch(onSuccess({result: "works"}))
  }, 2000)
}

export default apiMiddleware
