const webduinoModule = require('./Dht');
const supportBlockly = require('./Dht-blockly');

// Add to webduino-blockly
if (global.boardReady) {
  webduinoModule(global.webduino);
  supportBlockly(global, global.webduino);
}

module.exports = webduinoModule;
