function onOpen() {
  // Default Function, Run whenever the document Opened
  Logger.log('Hello')
  var doc = DocumentApp.getActiveDocument();
  DocumentApp.getUi()
    .createMenu('Advanced')
    .addItem('one', 'myFun1')
    .addItem('two', 'myFun2')
    .addSeparator()
    .addItem('three', 'myFun3')
    .addItem('four', 'myFun4')
    .addItem('five', 'myFun5')
    .addToUi();
}


function myFun1() {
  var ui = DocumentApp.getUi();

  var result = ui.alert('Are you logged in?', ui.ButtonSet.YES_NO);
  ui.alert('You responded with ' + result);

}
function myFun2() {
  Logger.log("First was run")
  var result = Session.getActiveUser().getEmail()
  ui.alert('Your email is ' + email);

}
function myFun3() {
  var ui = DocumentApp.getUi()
  var response = ui.prompt("Getting to know you", "May I know your name?", ui.ButtonSet.YES_NO)
  ui.alert("Your name" + response.getResponseText())
}
function myFun4() {
  Logger.log("First was run")
  var ui = DocumentApp.getUi()
  var result = Session.getActiveUserLocale()
  var resultTZ = Session.getScriptTimeZone()
  ui.alert('Your locale' + result + resultTZ);

}
function myFun5() {
  Logger.log("First was run")
}