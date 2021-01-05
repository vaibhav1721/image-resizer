
var Joi                                         = require('joi');
var validator                                   = require('../../../validator/validator');

var apiReferenceModule                          = "imageResizer";


exports.getUrlData                    = getUrlData;

function getUrlData(req,res,next) {
  req.apiReference = {
    module: apiReferenceModule,
    api: "getUrlData"
  };
  var schema = Joi.object().keys({
    url : Joi.string().uri().required()
  });
  var validFields = validator.validateFields(req.apiReference, req.query, res, schema);
  if (validFields) {
    next();
  }
}