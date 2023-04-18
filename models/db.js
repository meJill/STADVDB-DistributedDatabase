const res = require('express/lib/response');
const mysql = require('mysql2');
const { promise } = require('ping');
const ping = require('ping');
const File = require('../public/js/file');

const ip1 = '34.126.128.168';
const ip2 =  '34.143.156.151';
const ip3 = '34.87.6.49';
const pooluser = 'root';
const poolpass = 'group23sleigh';

ping.sys.probe(ip1, function(active){
    if(active==1)
        active1 = 1;
});
ping.sys.probe(ip2, function(active){
    if(active==1)
        active2 = 1;
    });
ping.sys.probe(ip3, function(active){
    if(active==1)
        active3 = 1;
});        

const node1 = mysql.createPool({
    host: ip1,
    user: pooluser,
    password: poolpass,
    database: 'IMDB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});

const node2 = mysql.createPool({
    host: ip2,
    user: pooluser,
    password: poolpass,
    database: 'IMDB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});

const node3 = mysql.createPool({
    host: ip3,
    user: pooluser,
    password: poolpass,
    database: 'IMDB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});

const database = {
    // create the connection to database
    connect: async function() {
        
        node1.getConnection(function (err) {
            //if(err) throw err;
            if(err) console.log("Unable to connect to Node 1");
            else console.log("Node 1: Connection Successful.");
        });

        node2.getConnection(function (err) {
            //if (err) throw err;
            if(err) console.log("Unable to connect to Node 2");
            else console.log("Node 2: Connection Successful.");
        });

        node3.getConnection(function (err) {
            //if (err) throw err;
            if(err) console.log("Unable to connect to Node 3");
            else console.log("Node 3: Connection Successful.");
        });
    },

    //Single query for either node 1, 2, or 3
    query: function(node, query){
        switch(node) {
            case 'node-1':
                node1.query(query,
                function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                });
                break;
            case 'node-2':
                node2.query(query,
                        function (err, result, fields) {
                        if (err) throw err;
                        console.log(result);
                        });
                break;
            case 'node-3':
                node3.query(query,
        function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        });
                break;
        } 
    },

    querynode1:async function(query){
        return new Promise(resolve => {
            node1.query(query, function(err, result, fields){
                if(err) console.log(err);
            });          
        }); 
    },

    callnode1:  function(query, callback){
        node1.query(query, function(err, result, fields){
            if(err) console.log(err);
            return callback(result);
        });
    },

    querynode2: async function(query){
        return new Promise(resolve => {
            node2.query(query, function(err, result, fields){
                if(err) console.log(err);
            }); 
        }); 
    },

    callnode2:  function(query, callback){
        node2.query(query, function(err, result, fields){
            if(err) console.log(err);
            return callback(result);
        });
    },

    querynode3: async function(query){
        return new Promise(resolve => {
            node3.query(query, function(err, result, fields){
                if(err) console.log(err);
            });
        }); 
    },

    callnode3:  function(query, callback){
        node3.query(query, function(err, result, fields){
            if(err) console.log(err);
            return callback(result);
        });
    },

    readnode1: function(query){
        node1.query("START TRANSACTION; ");
        node1.query(query, function(err, result, fields){
            console.log("\nREAD RESULT:\n", result);
        });
        node1.query("COMMIT;");
    },

    readnode2: function(query){
        node2.query("START TRANSACTION; ");
        node2.query(query, function(err, result, fields){
            console.log("\nREAD RESULT:\n", result);
        });
        node2.query("COMMIT;");
    },

    readnode3: function(query){
        node3.query("START TRANSACTION; ");
        node3.query(query, function(err, result, fields){
            console.log("\nREAD RESULT:\n", result);
        });
        node3.query("COMMIT;");
    },

    //update recently reconnected node
    recover: function(status){
        var ping = require('ping');
        var query;
        if(status[0] == 1){
            console.log("Entered Node 1 Recovery");
            File.readNode1(function (res){
                if(res!=""){
                    console.log(res);
                    node1.query(res);
                    File.clearNodes1();
                }
            });
            
        }
        if(status[1] == 1){
            console.log("Entered Node 2 Recovery");
            File.readNode2(function (res){
                if(res!=""){
                    console.log(res);
                    node2.query(res);
                    File.clearNodes2();
                }
            });
        }
        if(status[2] == 1){
            console.log("Entered Node 3 Recovery");
            File.readNode3(function (res){
                if(res!=""){
                    console.log(res);
                    node3.query(res);
                    File.clearNodes3();
                }
            });
        }
    }

}

module.exports = database;