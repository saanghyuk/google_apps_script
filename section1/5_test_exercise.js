function onOpen() {
  // Default Function, Run whenever the document Opened
  Logger.log('Hello')
  var doc = DocumentApp.getActiveDocument();
  DocumentApp.getUi()
    .createMenu('Advanced 2')
    .addItem('one', 'myFun1_2')
    .addItem('two', 'myFun2_2')
    .addSeparator()
    .addItem('three', 'myFun3_2')
    .addItem('four', 'myFun4_2')
    .addItem('five', 'myFun5_2')
    .addItem('six', 'myFun6_2')
    .addItem('seven', 'myFun7_2')
    .addItem('eight', 'myFun8_2')
    .addItem('nine', 'myFun9_2')
    .addItem('ten', 'myFun10_2')
    .addToUi();
}



function myFun1_2() {
  var body = DocumentApp.getActiveDocument().getBody();
  var ui = DocumentApp.getUi();
  var response = ui.prompt('Search', 'WHAT DID YOU WANT TO FIND?', ui.ButtonSet.OK_CANCEL);
  if (response.getResponseText()) {
    var replacer = ui.prompt('Replace', 'WHAT DID YOU WANT TO REPLACE?', ui.ButtonSet.OK_CANCEL);
    body.replaceText(response.getResponseText(), replacer.getResponseText())
  }
}
function myFun2_2() {


}
function myFun3_2() {

}
function myFun4_2() {


}
function myFun5_2() {

}

function myFun6_2() {

}


function myFun7_2() {

}


function myFun8_2() {

}


function myFun9_2() {

}

function myFun10_2() {

}














