import promisify from 'cordova-promisify'
import createPlayer from 'factories/player'

export const START_GAME = 'START_GAME'
export function startGame(saveName, shouldCreate=false) {
  return function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    // TODO: ... load file into nativestorage?
    promisify(window.resolveLocalFileSystemURL)(cordova.file.dataDirectory)
    .then(fs => promisify(fs.getFile.bind(fs))(`saves/${saveName}.json`, {create: shouldCreate}))
    .then(fileEntry => {
      if (shouldCreate) {
        fileEntry.createWriter(fw => {
          fw.onwriteend = (e) => {
            dispatch(startGame(saveName))
          }
          fw.onerror = err => {
            throw err
          }
          let json = JSON.stringify(createPlayer())
          let data = new Blob([json], {type: "application/json"})
          fw.write(data)
        })
      } else {
        promisify(fileEntry.file.bind(fileEntry))()
        .then(file => {
          let fr = new FileReader()
          fr.onloadend = () => {
            let profile = JSON.parse(fr.result)
            console.log(profile)
            // TODO: dispatch START_GAME with loaded save profile in fr.result
          }
          fr.onerror = err => {
            throw err
          }
          fr.readAsText(file)
        })
      }
    })
    .catch(err => {
      if (err.code === FileError.NOT_FOUND_ERR) {
        return dispatch(startGame(Date.now(), true))
      }
      console.error('startGame', err)
    })
  }
}