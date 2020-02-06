export const TRAVEL_TO_SYSTEM = 'TRAVEL_TO_SYSTEM'

export function travelToSystem(system) {
  return function(dispatch, getState) {
    let state = getState()
    let fuel = state.player.fuel
    let currentSystem = state.system
    /*
    request(`galaxy/${state.galaxy.name}`)
    .then(d
    */
   fetch('/galaxies/Milky Way/systems/Sol').then(r => {
     console.log(r)
   }).catch(e => {
     console.log(e)
   })
    // TODO: if currentSystem's distance > fuel, report failure and deny travel
    return dispatch({
      type: TRAVEL_TO_SYSTEM,
      system
    })
  }
}