// The `bindings` library is used by the majority of native modules to help locate
// the native binary.
//
// Webpack cannot handle dynamic dependencies like this so we have to
// override `bindings` and use static paths.

module.exports = function(str) {
  if (str === 'detection.node') {
    const result = require('../node_modules/usb-detection/build/Release/detection.node');
    result.path = '../node_modules/usb-detection/build/Release/detection.node';
    return result;
  }
  // if (str === 'node_sqlite3.node') {
  //   const result = require('../node_modules/sqlite3/lib/binding/electron-v2.0-win32-x64/node_sqlite3.node');
  //   result.path = '../node_modules/sqlite3/lib/binding/electron-v2.0-win32-x64/node_sqlite3.node';
  //   return result;
  // }
};
