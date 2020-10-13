import { NEW_PLAYER, DELETE_PLAYER, SET_PLAYER } from 'actions/player'

function player(state = {
  slot: -1,
  data: {},
}, action) {
  switch (action.type) {
    case NEW_PLAYER:
      return {
        ...state,
      }
    case DELETE_PLAYER:
      return {
        ...state,
      }
    case SET_PLAYER:
      return {
        ...state,
        slot: action.slot,
        data: action.player,
      }
    default:
      return state
  }
}

export default player