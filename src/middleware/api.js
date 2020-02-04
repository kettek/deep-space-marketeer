import { API } from '../actions/types'
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/api'

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

	if (label) {
		dispatch(apiStart(label))
	}

  // get data
  setTimeout(() => {
    dispatch(onSuccess({result: "works"}))
  }, 2000)
  if (label) {
    dispatch(apiEnd(label))
  }

}

export default apiMiddleware
