const webScrapperController               = require('./webScrapperController/webScrapperController');
const webScrapperValidator                = require('./webScrapperValidator/webScrapperValidator');

app.get('/getUrlData',        webScrapperValidator.getUrlData, webScrapperController.getUrlData)