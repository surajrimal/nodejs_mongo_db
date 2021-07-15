var MongoClient = require('mongodb').MongoClient;
//connected with cloud
var url = "mongodb+srv://suraj:suraj@cluster0.b7pwh.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result){
        if(err) throw err;
        console.log(result[0]);
        db.close();
    });
});