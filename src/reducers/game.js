import { ENTER_GALAXY } from 'actions/game'

function game(state = {
  inGame: false,
  isOffline: true, // Reserved for future use
  saveSlot: 0,
}, action) {
  console.log('game reducer', action)
  switch (action.type) {
    case ENTER_GALAXY:
      console.log('entering galaxy')
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