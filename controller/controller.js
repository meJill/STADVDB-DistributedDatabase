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

exports.getSearch = function(req, res) {
    res.render('search',{
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
