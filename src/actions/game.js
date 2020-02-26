import createPlayer from 'factories/player'
import { slotsDB } from '../db'
import '../helpers/time'

export const START_GAME = 'START_GAME'
export function startGame(saveName, playerData={}) {
  return function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    // Re-dispatch with random date if saveName is empty.
    if (saveName === '') {
      dispatch(startGame(new Date().toSEString(), playerData))
      return
    }
    // Otherwise attempt to load and/or create.
    slotsDB.getItem(saveName)
    .then(save => {
      // Does not exist
      if (save === null) {
        slotsDB.setItem(saveName, createPlayer(playerData))
        .then(v => {
          console.log('saved', v)
          dispatch(startGame(saveName, playerData))
        })
      // Exists
      } else {
        console.log('launch with', save)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function deleteGame(saveName) {
  return new Promise((resolve, reject) => {
    slotsDB.removeItem(saveName)
    .then(_ => {
      resolve()
    })
    .catch(err => {
      reject(err)
    })
  })
}