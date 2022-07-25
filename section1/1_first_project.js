function myFunction() {
  var doc = DocumentApp.create('New Doc 3');
  var body = doc.getBody();
  body.appendParagraph('Hello World');
  var email = Session.getActiveUser().getEmail()
  var subject = doc.getName()
  var bodyEmail = 'This is the new doc = ' + doc.getUrl() + ' ' + body;
  // GmailApp.sendEmail(email, subject, bodyEmail)
  Logger.log(body)
  Logger.log(body.getText())
}

function firstApp() {
  var welcomeMessage = "Hello World";
  for (var x = 0; x < 10; x++) {
    Logger.log(welcomeMessage + ' ' + x)
  }
}

function createDoc() {
  // var doc = DocumentApp.create('New Test Doc')
  var doc = DocumentApp.openById("1T1rHZxnrxEevUBsiG09VcC9-I8zkTVRNneBoP6CyoOk");
  Logger.log(doc.getName())
  Logger.log(doc.getId())
  Logger.log(doc.getUrl())
}