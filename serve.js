var http = require("http");
var express = require("express");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();

var userM = require("./modules/dao/userM");
var newsM = require("./modules/dao/newsM");
var urlM = require("url");

app.use(cookieParser());
app.use(session({secret: 'theNews'}));

app.get("/index", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  var type = "top";
  
  newsM.getNewsByType(type, function(result) {
    res.jsonp(result);
  });
});

app.get("/list", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");
  
  var type = urlM.parse(req.url, true).query.type;
  
  newsM.getNewsByType(type, function(result) {
    res.jsonp(result);
  });
});

app.get("/item", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  var id = urlM.parse(req.url, true).query.id;
  
  newsM.getNewsById(id, function(result) {
    res.jsonp(result);
  });
});

app.get("/search", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  var s = urlM.parse(req.url, true).query.s;

  newsM.getNewsByS(s, function(result) {
    res.jsonp(result);
  });
});
app.get("/user", function (req, res) {
  var userId = req.session.userId;
  var content = {};

  userM.getUserById(userId, function(result1) {
    content.userName = result1.name;
    content.userSex = result1.sex;
    content.userEmail = result1.email;
    content.userMsg = result1.msg;
    content.news = [];
  });
  userM.getAttentionNewsById(userId, function(result2) {
    if(result2.length != 0){
      for(var i = 0; i < result2.length; i++) {
        newsM.getAttentionNewsById(result2[i].newsid, function(result3) {
          content.news.push(result3);
          if(content.news.length == result2.length){
            res.jsonp(content);
          }
        });
      }
    }else{
      res.jsonp(content);
    }
  });
});
app.get("/login", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  var acc = req.param("acc");
  var psw = req.param("psw");

  userM.checkUser(acc, psw, function(result) {
    req.session.userId = result.id;
    req.session.userName = result.name;
    res.jsonp(result);
  });
});
app.get("/register", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  var user = {
    acc: req.param("acc"),
    psw: req.param("psw"),
    name: req.param("name"),
    sex: req.param("sex"),
    email: req.param("email"),
    msg: req.param("msg"),
  };

  userM.addUser(user, function(result) {
    res.jsonp(true);
  });
});
app.get("/session", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  if(req.session.userId){
    var result = {
      userId: req.session.userId,
      userName: req.session.userName,
    };
    
    res.jsonp(result);
  }else{
    res.jsonp(false);
  }
});
app.get("/attention", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");

  var attention = {
    userid: req.param("userid"),
    newsid: req.param("newsid"),
    title: req.param("title"),
    author_name: req.param("author_name"),
    date: req.param("date"),
    thumbnail_pic_s: req.param("thumbnail_pic_s"),
    thumbnail_pic_s02: req.param("thumbnail_pic_s02"),
    thumbnail_pic_s03: req.param("thumbnail_pic_s03"),
  };

  userM.addAttention(attention, function(result) {
    newsM.addAttention(attention, function(result) {
      res.jsonp(true);
    });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Serve running at http://" + host + port);
});