import { START_GAME, ENTER_GALAXY } from 'actions/game'

function game(state = {
  inGame: false,
  isOffline: true, // Reserved for future use
  saveSlot: 0,
}, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        ...{
          saveSlot: action.saveSlot,
          inGame: false,
        }
      }
    case ENTER_GALAXY:
      return {
        ...state,
        ...{
          saveSlot: action.saveSlot,
          inGame: true,
        }
      }
    default:
      return state
  }
}

export default game