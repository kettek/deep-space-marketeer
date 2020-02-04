let appComponent = require('./src/app')

appComponent.renderSync({ name: "Deep Space Marketeer" }).appendTo(document.body)
