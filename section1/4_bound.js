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
    .addItem('six', 'myFun6')
    .addItem('seven', 'myFun7')
    .addItem('eight', 'myFun8')
    .addItem('nine', 'myFun9')
    .addItem('ten', 'myFun10')
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
  var ui = DocumentApp.get
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
  var htmlOutput = HtmlService
    .createHtmlOutput("<h1>Hello, World!</h1><br><p>A change of speed, a change of style...</p>")
    .setWidth(250)
    .setHeight(300);
  DocumentApp.getUi().showModalDialog(htmlOutput, "Title Whatever")
}

function myFun6() {
  Logger.log("First was run")
  var htmlOutput = HtmlService
    .createHtmlOutputFromFile('modal')
    .setWidth(250)
    .setHeight(300);
  DocumentApp.getUi().showModalDialog(htmlOutput, "Title Whatever")
}


function myFun7() {
  var cursor = DocumentApp.getActiveDocument().getCursor();
  cursor.insertText(Date())
}


function myFun8() {
  var doc = DocumentApp.getActiveDocument().getId();
  var ui = DocumentApp.getUi();
  ui.alert("Doc ID" + doc);
}


function myFun9() {
  var selection = DocumentApp.getActiveDocument().getSelection();
  var output;

  if (selection) {
    var el = selection.getRangeElements();
    DocumentApp.getUi().alert('num of el' + el.length);
    for (x = 0; x < el.length; x++) {
      if (el[x].getElement().editAsText) { // TRUE OR FALSE
        var holder = el[x].getElement().editAsText()
        output += holder.getText();
        if (el[x].isPartial()) { // if it is not a element, but part of it
          holder.setBold(el[x].getStartOffset(), el[x].getEndOffsetInclusive(), true)
        } else {
          holder.setBold(true)
        }
      }
    }
    DocumentApp.getUi().alert('Number of selected elements' + output);
  }

}

function myFun10() {
  var selection = DocumentApp.getActiveDocument().getSelection();
  var output = 'TRANSLATION:';
  if (selection) {
    var el = selection.getRangeElements();
    for (var x = 0; x < el.length; x++) {
      if (el[x].getElement().editAsText) {
        var holder = el[x].getElement().editAsText();
        output += holder.getText();
      }
    }

    var spanish = LanguageApp.translate(output, 'en', 'es');
    DocumentApp.getUi().alert('Spanish : ' + spanish);
  }
}














