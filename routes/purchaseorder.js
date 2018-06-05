var express = require('express');
var _ = require('lodash');
var jsonData = require('../json/data');
var router = express.Router();

/* GET  listing. */
router.get('/:poNumber', function(req, res, next) {
  console.log(req.params.poNumber);
  var poNumber = req.params.poNumber;
  var resultData = _.find(jsonData,{"PO Number": poNumber});
  if(resultData) {
     res.status(201).json({"PO Number": poNumber, "PO status": resultData["PO Status "],"PO Amount" : resultData["PO Amount (In Entered Currency)"] });
  } else {
  	 res.status(200).json({"Error Code": "12001","Error Message":"PO Details Not Available for given input"});
  }
});

module.exports = router;
