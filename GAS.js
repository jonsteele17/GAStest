//Add New Sheet onClick function (Duplicate Template Sheet)
function duplicate() {

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var templateSheet = ss.getSheetByName('Template');
    ss.insertSheet('template2', {template: templateSheet});
     
 }

 duplicate();
