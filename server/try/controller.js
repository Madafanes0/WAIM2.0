const { get } = require("./routes")
const pool = require('../db')
const queries = require("./queries")



const getAI = (req, res) => {
    pool.query(queries.getAI, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
});
}

const postAI =(req, res)=>{

    const { tool_id, toolName, contentTypeId, ecosystem, freeVersion, licenseType, paidVersion, referenceURL, toolDescription } = req.body;

    const values = [tool_id, toolName, contentTypeId, ecosystem, freeVersion, licenseType, paidVersion, referenceURL, toolDescription];

    pool.query(queries.postAI, values, (error, results)=>{
        if(error) {
            return res.status(400).json({error: error.message});
        }
        res.status(201).json(results.rows[0]);
    });

}

module.exports = 
    {getAI, 
     postAI,
    };