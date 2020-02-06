export const START_GAME = 'START_GAME'

export function startGame(saveName) {
  return function(dispatch, getState) {
    let state = getState()
    if (state.game.inGame) {
      return
    }
    // TODO: ... load file into nativestorage?
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, fs => {
      let saveFile = ''
      if (saveName === '') {
        saveFile = Date.now()
      } else {
        saveFile = saveName
      }
      // Get our save file
      fs.getFile(`saves/${saveFile}.json`, {create: true}, fileEntry => {
        if (saveName === '') { // new save
          fileEntry.createWriter(fw => {
            fw.onwriteend = () => {
              console.log('Created new save file')
            }
            fw.onerror = err => {
              console.log('createSave', err)
            }
            let json = JSON.stringify({
              Player: "test",
            })
            let data = new Blob([json], {type: "application/json"})
            fw.write(data)
          })
        } else { // load old save
          fileEntry.file(file => {
            console.log(file)
            let fr = new FileReader()
            fr.onloadend = () => {
              console.log('save data', fr.result)
            }
            fr.onload = e => {
              console.log(e)
              console.log('save data', fr.result)
            }

            fr.readAsText(file)
          }, err => {
            console.log('err on fileread', err)
          })
        }
      }, err => {
        console.log("err on file", err)
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