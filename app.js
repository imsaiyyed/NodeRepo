const express = require('express');
const app = express();
const emailRoutes=require('./api/emails');
const bodyParser=require('body-parser');
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','*');
        return res.status(200).json({});
    }
    next();
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/emails',emailRoutes);

app.use((req,res,next)=>{

    const error=new Error('Not Available');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        errorMessage:'Something went wrong...'
    });
})

module.exports=app;