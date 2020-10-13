import createPlayer from 'factories/player'
import { slotsDB } from '../db'
import '../helpers/time'

import { enterGalaxy } from './game'

export const NEW_PLAYER = 'NEW_PLAYER'
export function newPlayer(saveName, playerData={}) {
  return async function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    // Re-dispatch with random date if saveName is empty.
    if (saveName === '') {
      dispatch(newPlayer(new Date().toSEString(), playerData))
      return
    }
    // Otherwise attempt to load and/or create.
    try {
      let save = await slotsDB.getItem(saveName)
      if (save === null) {
        let v = await slotsDB.setItem(saveName, createPlayer(playerData))
        dispatch(newPlayer(saveName, playerData))
      } else {
        // Successfully loaded, let's set the player.
        dispatch(setPlayer(saveName, save))
      }
    } catch(err) {
      console.log(err)
    }
  }
}

export const SET_PLAYER = 'SET_PLAYER'
export function setPlayer(saveName, playerData) {
  return async function(dispatch, getState) {
    dispatch({
      type: SET_PLAYER,
      slot: saveName,
      player: playerData,
    })
    dispatch(enterGalaxy())
  }
}

export const DELETE_PLAYER = 'DELETE_PLAYER'
export function deletePlayer(saveName) {
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
