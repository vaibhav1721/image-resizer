let async                       = require('async');
let _                           = require('underscore');
let response                    = require('../../../utills/response');
const axios                     = require('axios');
const cheerio                   = require('cheerio');

exports.getUrlData                = getUrlData;

async function getUrlData(req, res) {
  try {
    let url = req.query.url;
    let urlData = await axios.get(url);
    let data =  getData(urlData.data);

    return response.sendSuccessResponse(res, {data})
  }catch (e){
    console.log("error",e);
    response.somethingWentWrongError(res);
  }
}

function getData(urlHtml) {
  let data = {};
  let imageArr =[];
  let featureArr = [];
  const $ = cheerio.load(urlHtml);

  let title = $('#productTitle').text();
  title = title.replace(/\n/g,"");
  data.title = title;

  $('#altImages').find('ul').find('li').filter(function () {
    let data = $(this);
    let imageUrl = data.find('span').find('span').find('span').find('span').find('span').find('img').attr('src')
    if (imageUrl != null && imageUrl != undefined) {
        imageArr.push(imageUrl);
      }
    });

  data.imageUrlArr = imageArr;

  $('#feature-bullets').find('ul').find('li').filter(function () {
    let data = $(this);
    featureArr.push(data.text().replace(/\n/g,""));
  })
  let featureStr = featureArr.join(' ---- ');
  data.features = featureStr;
  return data;
}