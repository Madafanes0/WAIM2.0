const getAI = 'SELECT * FROM "AI"';
const postAI = 'INSERT INTO "AI" ("tool_id", "toolName", "contentTypeId", "ecosystem", "freeVersion", "licenseType", "paidVersion", "referenceURL", "toolDescription") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';

const patchAI= '';

module.exports = {
    getAI, 
    postAI
};