'use strict';

var express = require('express');

var router = express.Router();

router.use(function(req,res,next){
  console.log(req.url);
  next();
});

router.get('/', function(req,res){
  res.sendFile('/index.html');
});

module.exports = router;
