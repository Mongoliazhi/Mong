var express = require('express');
var app = express();
var dp = require("./mysql");


//支持跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/demo', function(req, res){
  res.statusCode = 200;
  // res.header("Content-Type", "application/json;charset=utf-8");

  dp.query("select vue_title,vue_url,vue_Imgurl,vue_content,vue_Fabulous,vue_Time from vue_wen", function (err, rows) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows)
      // res.send((JSON.stringify(rows)));
      res.json(JSON.stringify(rows))
    }
  })

});

app.get('/mainGoodsList', function(req, res){
  res.statusCode = 200;
  // res.header("Content-Type", "application/json;charset=utf-8");

  dp.query("select * from tb_goods", function (err, rows) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows)
      res.json(JSON.stringify(rows))
    }
  })

});

app.listen(4000);

