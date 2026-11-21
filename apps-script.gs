// Google Apps Script – paste into Extensions > Apps Script (bound to your Google Sheet)
function clean(v){
  v = String(v == null ? "" : v).slice(0, 300);
  return /^[=+\-@]/.test(v) ? "'" + v : v;   // blocks spreadsheet formula injection
}
function doPost(e){
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSheet();
  if (sh.getLastRow() === 0) sh.appendRow(["Time","Name","Score (/100)","Rating (/5)","Feedback"]);
  sh.appendRow([new Date(), clean(d.name), Number(d.score)||0, Number(d.rating)||0, clean(d.feedback)]);
  return ContentService.createTextOutput("ok");
}
