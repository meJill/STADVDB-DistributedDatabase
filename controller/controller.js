exports.getIndex = function(req, res) {
    res.render('index', {
        title: "STADVDV | MCO2 TRANSACTION MANAGEMENT"
    });

};

exports.getInsert = function(req, res) {
    res.render('insert',{
        title: "STADVDV | MCO2 TRANSACTION MANAGEMENT (INSERT)"
    });
}

exports.getDelete = function(req, res) {
    res.render('delete',{
        title: "STADVDV | MCO2 TRANSACTION MANAGEMENT (SEARCH)"
    });
}

exports.getUpdate = function(req, res) {
    res.render('update',{
        title: "STADVDV | MCO2 TRANSACTION MANAGEMENT (UPDATE)"
    });
}

exports.getView = function(req, res) {
    res.render('view',{
        title: "STADVDV | MCO2 TRANSACTION MANAGEMENT (VIEW)"
    });
}

exports.getInsertMovie = (req, res) => {
    console.log(req.body);
    const { id, title, year, genre, director, actor1, actor2 } = req.body;
    const movie = { id, title, year, genre, director, actor1, actor2 };

        conn.dbQuery(conn.node_self, "INSERT INTO movies SET ?", movie, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Movie added to master');
            }
        });

        let node = year < 1980 ? conn.node_2 : conn.node_3;

        // Insert movie into slave
        // 
        conn.dbQuery(node, "INSERT INTO movies SET ?" , movie, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error adding movie. Please contact administrator.');
            } else {
                console.log('Movie added to slave');
                res.redirect('/movies');
            }
        });
}

exports.getUpdateMovie = (req,res) => {
    console.log(req.body);
    const { title, year, genre, director, actor1, actor2 } = req.body;
    const id = req.paarams.movie_id;

    const queryValues = [];
        let query = "UPDATE movies SET ";
    
        if (title !== undefined && title !== '') {
            query += " title = ?,";
            queryValues.push(title);
        } else {
            query += " title = NULL,";
        }
    
        if (year !== undefined && year !== '') {
            query += " year = ?,";
            queryValues.push(year);
        } else {
            query += " year = NULL,";
        }
    
        if (genre !== undefined && genre !== '') {
            query += " `genre` = ?,";
            queryValues.push(genre);
        } else {
            query += " `genre` = NULL,";
        }
    
        if (director !== undefined && director !== '') {
            query += " director = ?,";
            queryValues.push(director);
        } else {
            query += " director = NULL,";
        }

        if (actor1 !== undefined && actor1 !== '') {
            query += " actor1 = ?,";
            queryValues.push(actor1);
        } else {
            query += " actor1 = NULL,";
        }

        if (actor2 !== undefined && actor2 !== '') {
            query += " actor2 = ?,";
            queryValues.push(actor2);
        } else {
            query += " actor2 = NULL,";
        }
    
        // Remove the last comma from the query string
        query = query.slice(0, -1);
    
        query += " WHERE id = ?";
        queryValues.push(id);
        
        conn.dbQuery(conn.node_self, query, queryValues, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Movie ID ${id} edited in master`);
            }
        });
    
        queryValues.length = 0;
        query = "";

}