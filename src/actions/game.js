export const START_GAME = 'START_GAME'

export function startGame(saveSlot) {
  return function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    console.log('saveslot: ', saveSlot)
    // TODO: ... load file into nativestorage?
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, fs => {
      let reader = fs.createReader()
      reader.readEntries(entries => {
        console.log('files', entries)
      }, err => {
        console.log('err', err)
      })
      /*fs.getFile(`slot${saveSlot}.json`, {create: false}, file => {
        console.log("got the file", file);
      }, err => {
        console.log("err on file", file)
      })*/
    }, err => {
      console.log('main dir err', err)
    })
    // cordova.file.dataDirectory
    return dispatch({
      type: START_GAME,
      saveSlot
    })
  }
}