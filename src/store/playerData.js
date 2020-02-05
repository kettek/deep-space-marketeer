import { createStore } from redux

import playerDataReducer from '../reducers'

let store = createStore(playerDataReducer)

export default store