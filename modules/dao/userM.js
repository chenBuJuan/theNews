var sqlM = require("./sqlM");

exports.getUserById = function(id, callback) {
    sqlM.query(function(connection) {
        var sql = "select * from user where id = '" + id + "'";

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

exports.checkUser = function(acc, psw, callback) {
    sqlM.query(function(connection) {
        var sql = "select * from user where acc = '" + acc + "' and psw = '" + psw + "'";

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

exports.addUser = function(user, callback) {
    sqlM.query(function(connection) {
        var sql = "INSERT INTO user(id, acc, psw, name, sex, email, msg) VALUES(0, ?, ?, ?, ?, ?, ?)";
        var params = [user.acc, user.psw, user.name, user.sex, user.email, user.msg];

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

exports.getAttentionNewsById = function(id, callback) {
    sqlM.query(function(connection) {
        var sql = "select newsid from attention where userid = '" + id + "'";

        connection.query(sql, function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }else{
                callback(result);
            }
        });
    });
};

exports.addAttention = function(attention, callback) {
    sqlM.query(function(connection) {
        var sql = "INSERT INTO attention(userid, newsid) VALUES(?, ?)";
        var params = [attention.userid, attention.newsid];

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