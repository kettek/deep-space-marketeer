import player from './player'
import galaxy from './galaxy'
import system from './system'
import planet from './planet'
import shipyard from './shipyard'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  player,
  galaxy,
  system,
  planet,
  shipyard,
})

export default rootReducer