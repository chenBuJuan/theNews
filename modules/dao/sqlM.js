var mysql      = require('mysql');

exports.query = function(callback) {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'chen',
        database : 'coursedesign'
    });

    connection.connect();

    callback(connection);
};