var sqlM = require("./sqlM");

exports.getNewsByType = function(type, callback) {
    var http = require("http");

    var url = "http://v.juhe.cn/toutiao/index?type=" + type + "&key=2cc37d21a66b4fba8106cd8b66e12875";
    var result = "";

    http.get(url, function(response) {
        response.on("data", function(chunk) {
            result += chunk;
        });
        response.on("end", function() {
            result = JSON.parse(result);
            callback(result);
        });
    });
};

exports.getNewsById = function(id, callback) {
    var http = require("http");
    var cheerio = require("cheerio");

    var url = "http://mini.eastday.com/mobile/" + id + ".html";
    var result = "";

    http.get(url, function(response) {
        response.on("data", function(chunk) {
            result += chunk;
        });
        response.on("end", function() {
            var $ = cheerio.load(result);

            result = {
                author_name: $(".src").text().match(/[\u4E00-\u9FA5]+/g)[1],
                time: $(".src").text().match(/[-\d]+\s[\d:]+/)[0],
                title: $(".title").text(),
                msg: {}
            };

            var msg = $("#content").children();
            for(var i = 0; i < msg.length; i++) {
                if(msg[i].name == "p")
                result.msg["p" + i] = $(msg[i]).text();
                if(msg[i].name == "figure")
                result.msg["img" + i] = $(msg[i]).children("a").children("img").attr("src");
            }

            callback(result);
        });
    });
};

exports.getAttentionNewsById = function(id, callback) {
    sqlM.query(function(connection) {
        var sql = "select * from news where newsid = '" + id + "'";

        connection.query(sql, function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }else{
                callback(result[0]);
            }
        });
    });
}

exports.getNewsByS = function(s, callback) {
    sqlM.query(function(connection) {
        var sql = "select * from news where title like '%" + s + "%'";

        connection.query(sql, function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }else{
                callback(result);
            }
        });
    });
}

exports.addAttention = function(attention, callback) {
    sqlM.query(function(connection) {
        var sql = "INSERT INTO news(newsid, title, author_name, date, thumbnail_pic_s, thumbnail_pic_s02, thumbnail_pic_s03) VALUES(?, ?, ?, ?, ?, ?, ?)";
        var params = [attention.newsid, attention.title, attention.author_name, attention.date, attention.thumbnail_pic_s, attention.thumbnail_pic_s02, attention.thumbnail_pic_s03];

        connection.query(sql, params, function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }else{
                callback(result);
            }
        });
    });
}