var MongoClient = require('mongodb').MongoClient;
//connected with cloud
var url = "mongodb+srv://suraj:suraj@cluster0.b7pwh.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
      { _id: 1, product_id: 154, status: 1 }
      ];
      dbo.collection("orders").insertMany(myobj, function(err,res){
        if(err) throw err;
        console.log("Number of documents inserted:"+ res.insertedCount);
        db.close();
    });
});