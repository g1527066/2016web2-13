var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ///DB1に接続
  var Connection=require('tedious').Connection;
  var config={
    userName: 'mikado',
    password:'P@ssword',
    server:'',
    options:{}
  };
  
  var connection=new Connection(config);
  connection.on('connect',function(err){
    if(err){
      res.render('index',{title:"はじめての DB",message:err});
    }else{
      console.log("Connected");
      executeStatement();
    }
  });
  
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
