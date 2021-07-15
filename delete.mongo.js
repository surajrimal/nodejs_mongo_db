var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://suraj:suraj@cluster0.b7pwh.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db('mydb');
    //var myquery = {address: 'Mountain 21'};
    var myquery = {address: /^O/ };
    dbo.collection("customers").deleteMany(myquery, function(err, obj){
        if(err) throw err;
        //console.log("1 document deleted");
        console.log(obj.result.n + " document(s) deleted")
        db.close();
    });
});