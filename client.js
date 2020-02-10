let appComponent = require('./src/app')
let fastClick = require('fastclick')

document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js')

  appComponent.renderSync({ name: "Deep Space Marketeer" }).appendTo(document.body)

  fastClick.attach(document.body)

})