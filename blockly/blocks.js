var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['dht_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_NEW, "DHT ,  pin:")
      .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl(mainUrl + 'basic/sensor/dht.html' + utmUrl); 
  }
};

Blockly.Blocks['dht_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dht"), "var_");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET, "get temperature and humidity over every ");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/sensor/dht.html' + utmUrl); 
  }
};

Blockly.Blocks['dht_read'] = {
  init: function () {
    this.setCommentText(Blockly.Msg.WEBDUINO_DHT_FIRMWARE_COMMENT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_FIRMWARE,"硬體設定")
      .appendField(new Blockly.FieldVariable("dht"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_DHT_DETECT, "偵測溫濕度");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/sensor/dht.html' + utmUrl); 
  }
};

Blockly.Blocks['dht_get_number'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dht"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_NOW)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_DHT_GET_T, "temperature"],
        [Blockly.Msg.WEBDUINO_DHT_GET_H, "humidity"]
      ]), "dht_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setToolUrl('https://webduino.io');
    this.setHelpUrl(mainUrl + 'basic/sensor/dht.html' + utmUrl); 
  }
};

Blockly.Blocks['dht_trigger'] = {
  init: function() {
    this.setCommentText(Blockly.Msg.WEBDUINO_DHT_FIRMWARE_COMMENT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_DHT_FIRMWARE,"硬體設定")
        .appendField(new Blockly.FieldVariable("dht"), "dht")
        .appendField(Blockly.Msg.WEBDUINO_DHT_TIMER)
        .appendField(new Blockly.FieldDropdown([["on", "true"], ["off", "false"]]), "state")
        .appendField(Blockly.Msg.WEBDUINO_DHT_INTERVAL)
        .appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["5", "5"], ["10", "10"], ["30", "30"], ["60", "60"], ["180", "180"]]), "delaySec")
        .appendField(Blockly.Msg.WEBDUINO_DHT_RUN)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WEBDUINO_DHT_INFINITY, "-1"]]), "repeatTime")
        .appendField(Blockly.Msg.WEBDUINO_DHT_TIMES);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl(mainUrl + 'basic/sensor/dht.html' + utmUrl); 
  }
};
