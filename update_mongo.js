var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://suraj:suraj@cluster0.b7pwh.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    dbo = db.db('mydb');
    //var myquery = { address: "Valley 101"};
    var myquery = { address: /^S/};
    //var newvalues = { $set: {name: "Mickey", address: "Canyon 101"}};
    var newvalues = { $set: { name: "Suraj Rimal"}};
    dbo.collection("customers").updateMany(myquery, newvalues, function(err, res){
        if(err) throw err;
        //console.log("1 documents updated");
        console.log(res.result.nModified + " documents updated");
        db.close();
    });
});