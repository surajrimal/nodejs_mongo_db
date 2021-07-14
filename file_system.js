var fs = require('fs');

fs.writeFile('mynewfile4.txt', 'Hello content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});

fs.unlink('mynewfile3.txt', function(err){
    if(err) throw err;
    console.log('File deleted!');
});

fs.rename('myrenamedfile.txt', 'myrenamedfile1.txt', function(err){
    if (err) throw err;
    console.log('File Renamed');
});