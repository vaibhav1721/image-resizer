let async                       = require('async');
let _                           = require('underscore');
let response                    = require('../../../utills/response');
let Jimp                        = require('jimp');
var cloudinary                  = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dtgftspx2',
  api_key: '252889646618742',
  api_secret: '_Ca9MjS_sEsvK_-6zOcc96WLi90'
});

exports.getUrlData                = getUrlData;

async function getUrlData(req, res) {
  try {
    let url = req.query.url;
    let obj = {
      imageUrl32 : "",
      imageUrl150 : "",
      imageUrl450 : "",
      imageUrl800 : "",
    }
    // Jimp.read(url, function(err,img){
    //   if (err) throw err;
    //   img.resize(32, 32).getBase64( Jimp.AUTO , async function(e,img64){
    //     if(e)throw e
    //     let imageUrl32 = await cloudinary.uploader.upload(img64, {});
    //     obj.imageUrl32 = imageUrl32;
    //   });
    // });

    return response.sendSuccessResponse(res, {obj})
  }catch (e){
    console.log("error",e);
    response.somethingWentWrongError(res);
  }
}
