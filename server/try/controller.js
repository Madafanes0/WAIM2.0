const { get } = require("./routes")
const pool = require('../db')
const queries = require("./queries")



const getAI = async (req, res) => {
    
    pool.query(queries.getAI, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
});
}

const getAIByContentType = (req, res)=>{
    console.log(req.params);
    console.log("uwu");
    const contentTypeName= req.params.contentTypeName;
    pool.query(queries.getAIByContent, [contentTypeName], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const postAI = async (req, res)=>{

    const { tool_id, toolName, contentTypeId, ecosystem, freeVersion, licenseType, paidVersion, referenceURL, toolDescription } = req.body;

    const values = [tool_id, toolName, contentTypeId, ecosystem, freeVersion, licenseType, paidVersion, referenceURL, toolDescription];

    pool.query(queries.postAI, values, (error, results)=>{
        if(error) {
            return res.status(400).json({error: error.message});
        }
        res.status(201).json(results.rows[0]);
    });
}

const deleteAI =(req,res)=>{
    console.log(req.params);
    const {tool_id}=req.params;
    pool.query(queries.deleteAI, [tool_id],(error, results)=>{
        if(error) throw error;
        res.status(200).json({message: "AI tool deleted sucesfully or doesn't exist", data:results.rows[0]});
    })
}

module.exports = 
    {getAI, 
     postAI,
     getAIByContentType,
     deleteAI
    };