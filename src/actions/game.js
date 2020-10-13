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