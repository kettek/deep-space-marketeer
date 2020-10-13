import { ENTER_GALAXY, CREATE_GAME, DELETE_GAME, SET_GAME } from 'actions/game'

function game(state = {
  inGame: false,
  isOffline: true, // Reserved for future use
  saveSlot: 0,
}, action) {
  console.log('game reducer', action)
  switch (action.type) {
    case CREATE_GAME:
      return {
        ...state,
      }
    case SET_GAME:
      return {
        ...state,
        saveSlot: action.slot,
        ...action.data,
      }
    case DELETE_GAME:
      return {
        ...state,
      }
    case ENTER_GALAXY:
      console.log('entering galaxy')
      return {
        ...state,
        ...{
          inGame: true,
        }
      }
    default:
      return state
  }
}

export default game