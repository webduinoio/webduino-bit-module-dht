+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.getDht = function (board, pin) {
    return new webduino.module.Dht(board, board.getDigitalPin(pin));
  };
}));