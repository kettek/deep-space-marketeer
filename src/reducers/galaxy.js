import { TRAVEL_TO_SYSTEM } from 'actions/galaxy'

function galaxy(state = {
}, action) {
  switch (action.type) {
    case TRAVEL_TO_SYSTEM:
      console.log('traveling', action)
      return state
    default:
      return state
  }
}

export default galaxy