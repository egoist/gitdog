var Electronify = require('electronify')

if (process.env.HOT) {
  var index = __dirname + '/index.dev.html'
} else {
  var index = __dirname + '/resource/index.html'
}

var app = Electronify(index, {
    resizable: false
})
