/* Blockly Blocks and Functions */


/* Code Blocks */
Blockly.Blocks['header_settings'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Edit Header");
    this.appendValueInput("header_text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("text");
    this.appendValueInput("header_color")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("color");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



/* Block Code Functions */
Blockly.JavaScript['header_settings'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_header_color = Blockly.JavaScript.valueToCode(block, 'header_color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  var code = '';
  
  if( value_header_text != '' ){
  code += 'var headtext = '+value_header_text+';\n';
  code += 'document.getElementById("liveArea").innerHTML = "<h1>"+headtext+"</h1>";\n';
  }
  if( value_header_color != '' ){
  code += 'var headcolor = '+value_header_color+';\n';
  code += 'document.getElementById("liveArea").style.backgroundColor = '+value_header_color+';\n';
  }
  
  return code;
};
