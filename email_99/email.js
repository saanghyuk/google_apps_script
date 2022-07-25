// https://docs.google.com/spreadsheets/d/14y4ieBocDu6MAI-QyOyz7_zpv98A4a0L07YktmPn33A/edit#gid=1985587713

function myFunction() {

  let members = [];
  let mailCount = 0;
  let resultSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("전송결과");

  for (let i = 4; i < 11; i++) {
    let member = {}
    member['address'] = getValueFromSheet("후원자정보", i, 2);
    member['name'] = getValueFromSheet("후원자정보", i, 3);
    member['role'] = getValueFromSheet("후원자정보", i, 4);
    members.push(member)
  }

  for (let i = 0; i < members.length; i++) {
    member = members[i]
    // Logger.log(member['address'] + ' ' + member['name'] + ' '+ member['role'])
  }

  let emailContents = [];
  for (let i = 3; i < 6; i++) {
    let content = {};
    content['title'] = getValueFromSheet("이메일내용", i, 3);
    content['body'] = getValueFromSheet("이메일내용", i, 4);
    content['foot'] = getValueFromSheet("이메일내용", i, 5);
    emailContents.push(content)
  }

  for (let i = 0; i < members.length; i++) {
    setEmailContents(members[i], emailContents)
  }

  for (let i = 0; i < members.length; i++) {
    // MailApp.sendEmail(members[i]['address'], members[i]['content']['title'], members[i]['content']['body'])
    mailCount++;
  }

  let formattedDate = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy 년 MM 월 dd 일 HH:mm")
  Logger.log(formattedDate)
  Logger.log(mailCount)
  resultSheet.getRange("B2").setValue(formattedDate)
  resultSheet.getRange("B3").setValue(mailCount)



  // for (let i = 4 ; i < 11; i++){
  //   let mailAddress = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(i, 2).getValue();
  //   let name = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(i, 3).getValue();
  //   let role = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(i, 4).getValue();
  //   Logger.log(mailAddress + " " + name + " " + role)
  //   addresses.push(mailAddress)
  //   names.push(name)
  //   roles.push(role)
  // }

  // for(let i = 0 ; i < addresses.length ; i++){
  //   Logger.log(addresses[i] + " " + names[i] + " " + roles[i])
  // }

  // let mailTitle = name + " " + role +"님, 반갑습니다. ";
  // mailTitle += SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일내용").getRange(3, 3).getValue();
  // let mailBody = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일내용").getRange(3, 4).getValue();
  // Logger.log(mailAddress + " " + mailTitle + " " + mailBody)
  // MailApp.sendEmail(mailAddress, mailTitle, mailBody)

}


function getValueFromSheet(sheet, row, column) {
  let result = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet).getRange(row, column).getValue();
  return result;
}

function setEmailContents(member, emailContents) {
  if (member['role'] == "정회원") {
    member['content'] = emailContents[0]
  } else if (member['role'] == "준회원") {
    member['content'] = emailContents[1]
  } else {
    member['content'] = emailContents[2]
  }
}



