# webduino-bit-module-dht

Block Module for DHT11, of Webduino:bit.

## Installation
#### bower
```sh
bower install https://github.com/webduinoio/webduino-bit-module-dht.git
```
#### Node.js
```sh
$ npm install webduino-bit-module-dht
```

## Usage
```javascript
require('webduino-blockly');
require('webduino-bit-module-dht');

const opts = {
  board: 'Bit',
  device: 'device_id',
  transport: 'mqtt'
};

boardReady(opts, function (board) {
  board.samplingInterval = 250;
  const dht = getDht(board, bitGPIO(11));
  dht.read(function(evt){
    console.log(dht.temperature);
  }, 1000);
});

```

## License

This project is licensed under the MIT license, see [LICENSE](LICENSE) for more information.
