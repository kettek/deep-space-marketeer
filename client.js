let appComponent = require('./src/app')

document.addEventListener('deviceready', function() {
  // promisify native storage
  NativeStorage.getItemPromise = function(reference) {
    return new Promise((resolve, reject) => {
      NativeStorage.getItem(reference, success => {
        resolve(success)
      }, err => {
        reject(err)
      })
    })
  }
  NativeStorage.setItemPromise = function(reference, value) {
    return new Promise((resolve, reject) => {
      NativeStorage.setItem(reference, value, success => {
        resolve(success)
      }, err => {
        reject(err)
      })
    })
  }
  NativeStorage.removeItemPromise = function(reference) {
    return new Promise((resolve, reject) => {
      NativeStorage.remove(reference, success => {
        resolve(success)
      }, err => {
        reject(err)
      })
    })
  }
  NativeStorage.clearPromise = function() {
    return new Promise((resolve, reject) => {
      NativeStorage.clear(success => {
        resolve(success)
      }, err => {
        reject(err)
      })
    })
  }

  // render
  appComponent.renderSync({ name: "Deep Space Marketeer" }).appendTo(document.body)
}, false);