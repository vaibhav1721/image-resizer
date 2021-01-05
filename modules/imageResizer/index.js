const imageResizerController               = require('./imageResizerController/imageResizerController');
const imageResizerValidator                = require('./imageResizerValidator/imageResizerValidator');

app.get('/getUrlData',        imageResizerValidator.getUrlData, imageResizerController.getUrlData)