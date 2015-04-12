module.exports = breakpoint

function breakpoint () {
  var remote = require('' + 'remote') // prevent static analysis like browserify
  var w = remote.getCurrentWindow()
  w.show()
  w.openDevTools()
  alert('debug dialogue to make debugger breakpoint work')
  debugger
}
