module.exports = breakpoint

function breakpoint () {
  // prevent static analysis like browserify
  var remote;
  try {
    remote = require('' + 'electron').remote;
  } catch (e) {
    remote = require('' + 'remote');
  }
  var w = remote.getCurrentWindow()
  w.show()
  w.openDevTools()
  alert('debug dialogue to make debugger breakpoint work')
  debugger
}
