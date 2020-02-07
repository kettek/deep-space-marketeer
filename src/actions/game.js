export const START_GAME = 'START_GAME'

export function startGame(saveName) {
  return function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    // TODO: ... load file into nativestorage?
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, fs => {
      if (saveName === '') {
        saveName = Date.now()
      }
      // Load if exists or create if not
      fs.getFile(`saves/${saveName}.json`, {create: false}, fileEntry => {
          fileEntry.file(file => {
            let fr = new FileReader()
            fr.onloadend = () => {
              let profile = JSON.parse(fr.result)
              console.log(profile)
              // TODO: dispatch START_GAME with loaded save profile in fr.result
            }
            fr.onerror = err => {
              console.error('reading save', err)
            }
            fr.readAsText(file)
          }, err => {
            console.error('loading save', err)
          })
      }, err => {
        if (err.code !== FileError.NOT_FOUND_ERR) {
          console.error('checking save', err)
          return
        }
        fs.getFile(`saves/${saveName}.json`, {create: true}, fileEntry => {
          fileEntry.createWriter(fw => {
            fw.onwriteend = (e) => {
              dispatch(startGame(saveName))
            }
            fw.onerror = err => {
              console.error('creating save', err)
            }
            // TODO: Perhaps load from a factory func like "createPlayer()"
            let json = JSON.stringify({
              Player: "test",
            })
            let data = new Blob([json], {type: "application/json"})
            fw.write(data)
          })
        })
      })
    }, err => {
      console.log('main dir err', err)
    })
    // cordova.file.dataDirectory
    /*return dispatch({
      type: START_GAME,
      saveSlot
    })*/
  }
}