const mysql = require('mysql');

    const con = mysql.createConnection({
        host: "34.87.6.49",
        user: "root",
        password: "group23sleigh",
        database: "IMDB",
        multipleStatements: true
    })

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

