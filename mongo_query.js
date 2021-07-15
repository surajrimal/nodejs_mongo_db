var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://suraj:suraj@cluster0.b7pwh.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var query = { address: /^S/ };
    var mysort = { name: -1 }; //descending (1 for ascending)
    dbo.collection('customers').find(query).sort(mysort).toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        db.close();
    });
});