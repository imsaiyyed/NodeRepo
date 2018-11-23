var express = require('express');
const { poolPromise } = require('../database/db')

const router=express.Router();

router.get('/',async (req,res,next)=>{
    const pool = await poolPromise;
    const result = await pool.request().query("Select * from dbo.SentimentAnalysisMetadata");
    res.send(result.recordset);

});
router.post('/',(req,res,next)=>{

    const mail={
        data:req.body.data
    }
    res.status(200).json({
        message:'Posting',
        data:mail
    });
});
router.get('/:emailId',(req,res,next)=>{
    const id=req.params.emailId;
    res.status(200).json({
        message:'Posting',
        id:id
    });
});

module.exports= router;