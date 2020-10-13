import createPlayer from 'factories/player'
import { slotsDB } from '../db'
import '../helpers/time'

export const START_GAME = 'START_GAME'
export function startGame(saveName, playerData={}) {
  return async function(dispatch, getState) {
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
    try {
      let save = await slotsDB.getItem(saveName)
      if (save === null) {
        let v = await slotsDB.setItem(saveName, createPlayer(playerData))
        console.log('saved', v)
        dispatch(startGame(saveName, playerData))
      } else {
        console.log('launch with', save)
        dispatch(enterGalaxy(save))
      }
    } catch(err) {
      console.log(err)
    }
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

export const ENTER_GALAXY = 'ENTER_GALAXY'
export function enterGalaxy(playerData={}) {
  return async function(dispatch, getState) {
    let state = getState()
    state.game.inGame = true
    console.log('in game with', playerData, state)
  }
}