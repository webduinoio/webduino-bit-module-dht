Blockly.JavaScript['dht_new'] = function (block) {
  var dropdown_pin_ = block.getFieldValue('pin_');
  var code = 'getDht(board, bitGPIO(' + dropdown_pin_ + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['dht_get'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = variable_var_ + '.read(async function(evt){\n' +
    statements_do +
    '}, ' + value_time + ');\n';
  return code;
};

Blockly.JavaScript['dht_read'] = function (block) {
  var variable_var_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_'), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = variable_var_ + '.read(async function(evt){\n' +
    statements_do +
    '});\n';
  return code;
};

Blockly.JavaScript['dht_get_number'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_dht_ = block.getFieldValue('dht_');
  var code = variable_name_ + '.' + dropdown_dht_;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#mvnntd
Blockly.JavaScript['dht_trigger'] = function (block) {
  var variable_dht = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('dht'), Blockly.Variables.NAME_TYPE);
  var dropdown_state = block.getFieldValue('state');
  var dropdown_delaysec = block.getFieldValue('delaySec');
  var dropdown_repeattime = block.getFieldValue('repeatTime');
  var code = '';
  if (dropdown_state == 'true') {
    code = variable_dht + '.trigger(true,' + dropdown_delaysec + ',' + dropdown_repeattime + ');\n';
  } else {
    code = variable_dht + '.trigger(false);\n';
  }
  return code;
};
