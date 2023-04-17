const mysql = require('mysql');

    const con = mysql.createConnection({
        host: "34.143.156.151",
        user: "root",
        password: "group23sleigh",
        database: "IMDB",
        multipleStatements: true
    })

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

