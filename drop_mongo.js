var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://suraj:suraj@cluster0.b7pwh.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").drop(function(err, delok){
        if(err) throw err;
        if(delok) console.log("Collection deleted");
        db.close();
    });
});