import createPlayer from 'factories/player'
import { slotsDB } from '../db'

import '../helpers/time'

export const ENTER_GALAXY = 'ENTER_GALAXY'
export function enterGalaxy() {
  return function(dispatch, getState) {
    let state = getState()
    dispatch({
      type: ENTER_GALAXY,
    })
  }
}

export const CREATE_GAME = 'CREATE_GAME'
export function createGame(saveName, playerData={}) {
  return async function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    // Re-dispatch with random date if saveName is empty.
    if (saveName === '') {
      dispatch(createGame(new Date().toSEString(), playerData))
      return
    }
    // Otherwise attempt to load and/or create.
    try {
      let saveData = await slotsDB.getItem(saveName)
      if (saveData === null) {
        let v = await slotsDB.setItem(saveName, {
          player: createPlayer(playerData),
        })
        dispatch(createGame(saveName, playerData))
      } else {
        // Successfully loaded, let's set the player.
        dispatch(setGame(saveName, saveData))
      }
    } catch(err) {
      console.log(err)
    }
  }
}

export const SET_GAME = 'SET_GAME'
export function setGame(saveName, saveData) {
  return async function(dispatch, getState) {
    dispatch({
      type: SET_GAME,
      slot: saveName,
      data: saveData,
    })
    dispatch(enterGalaxy())
  }
}

export const DELETE_GAME = 'DELETE_GAME'
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

