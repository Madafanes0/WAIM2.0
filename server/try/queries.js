const getAI = 'SELECT * FROM "AI"';
const postAI = 'INSERT INTO "AI" ("tool_id", "toolName", "contentTypeId", "ecosystem", "freeVersion", "licenseType", "paidVersion", "referenceURL", "toolDescription") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
const getAIByContent = `
SELECT
    "A"."tool_id",
    "A"."toolName",
    "A"."contentTypeId",
    "A"."ecosystem",
    "A"."freeVersion",
    "A"."licenseType",
    "A"."paidVersion",
    "A"."referenceURL",
    "A"."toolDescription",
    "C"."name" AS "ContentType"
FROM
    "AI" "A"
JOIN    
    "ContentType" "C" ON "A"."contentTypeId" = "C"."id"
WHERE
    "C"."name" = $1;
`;

//const patchAI=;

const deleteAI = `
DELETE FROM "AI"
WHERE "tool_id" = $1
RETURNING *; 
`;

module.exports = {
    getAI, 
    postAI,
    getAIByContent,
    deleteAI
};