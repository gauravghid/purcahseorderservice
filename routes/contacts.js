var express = require('express');
var poContactsData = require('../json/pocontacts');
var _ = require('lodash');
var router = express.Router();

router.get('/:country', function(req, res, next) {
  console.log(req.params.country);
  var country = req.params.country;
  var result = _.find(poContactsData,{"country": country.toLowerCase()});
  if(result){
  	res.status(201).json({"country":country,"email": result["email"]});
  } else {
  	res.status(200).json({"Error Code": "12003","Error Message":"Purcahse Orders submission contact details not available for input data."});
  }  
});

module.exports = router;
