const con = mysql.createConnection({
    host: "34.126.128.168",
    user: "root",
    password: "group23sleigh",
    database: "IMDB"
  })

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });