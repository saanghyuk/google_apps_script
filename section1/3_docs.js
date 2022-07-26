function firstApp(){
  var welcomeMessage = "Hello World";
  for (var x = 0; x<10; x++){
    Logger.log(welcomeMessage + ' ' + x)
  }
}

function createDoc(){
  // var doc = DocumentApp.create('New Test Doc')
  var doc = DocumentApp.openById("1T1rHZxnrxEevUBsiG09VcC9-I8zkTVRNneBoP6CyoOk");
  var body = doc.getBody()
  var title = doc.getName()
  body.appendParagraph('Some new content : added ' + Date())
  body.appendHorizontalRule()
  body.appendPageBreak()
  Logger.log(body)
  Logger.log(title)
}

function seeDoc(){
  var doc = DocumentApp.openById("1T1rHZxnrxEevUBsiG09VcC9-I8zkTVRNneBoP6CyoOk");
  var body = doc.getBody();
  var selection = body.getText();
  Logger.log(selection)
  var korean = LanguageApp.translate(selection, 'en', 'ko')
  Logger.log(korean)
  body.appendParagraph(korean)

}

function seeParagraphOne(){
  var doc = DocumentApp.openById("1T1rHZxnrxEevUBsiG09VcC9-I8zkTVRNneBoP6CyoOk");
  var body = doc.getBody();
  // var p1 = body.getChild(0);
  // Logger.log(p1.getText())
  // var p2 = body.getChild(1);
  // Logger.log(p2.getText())
  // var p3 = body.getChild(2);
  // Logger.log(p3.getText());
  // p3.setText("CHANGED!!!")
  // p3.setFontSize(50)


  var paraList = body.getParagraphs();
  Logger.log(paraList[1].getText());
  Logger.log(paraList[2].appendText("ADDED"));
  var a= paraList[2].getAttributes();
  Logger.log(a);
  var style = {}
  style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri'
  style[DocumentApp.Attribute.FONT_SIZE] = 18;
  style[DocumentApp.Attribute.BOLD] = true;
  style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#ffff00'
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = '#000000'
  paraList[0].setAttributes(style);


}

function seeParagraphTwo(){
  var doc = DocumentApp.openById("1T1rHZxnrxEevUBsiG09VcC9-I8zkTVRNneBoP6CyoOk");
  var body = doc.getBody();
  // Logger.log(body.getNumChildren())
  Logger.log(body.getParagraphs().length)

  body.replaceText('content', 'NEW UPDATED STRING')
  for (var x=0; x<body.getNumChildren(); x++){
    var el = body.getChild(x);
    // Logger.log(el.getText());
    if(el.getType() == 'PARAGRAPH'){
      el.appendText('==='+el.getText().length)
      Logger.log(el.getText());
      Logger.log(el.getText().length);

    }
  }
}







