// var express = require('express');
// var app = express();
const http=require('http');
const app=require('./app');

const port=process.env.PORT || 3000;
const server=http.createServer(app);
server.listen(port);
// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'ismail.saiyyed',
//         password: 'Isu@1003',
//         server: 'localhost', 
//         database: 'TestDB' 
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

// var server = app.listen(5000, function () {
//     console.log('Server is running..');
// });