const request = require("supertest");
const app = require('../server2');
const db = require("../db");
const { getAI, postAI, getAIByContent, deleteAI } = require("../try/controller");

describe("Test AI endpoints", () => {
    const dummyData = {
        tool_id: 't0001',
        toolName: 'Dummy Tool',
        contentTypeId: 111111,
        ecosystem: 'Dummy Ecosystem',
        freeVersion: true,
        licenseType: 'Open Source',
        paidVersion: false,
        referenceURL: 'https://example.com',
        toolDescription: 'This is a dummy tool for testing purposes'
    };

    beforeAll(async () => {
        // Insert dummy data into the database
        await db.query(postAI, [
            dummyData.tool_id,
            dummyData.toolName,
            dummyData.contentTypeId,
            dummyData.ecosystem,
            dummyData.freeVersion,
            dummyData.licenseType,
            dummyData.paidVersion,
            dummyData.referenceURL,
            dummyData.toolDescription
        ]);
    });

    afterAll(async () => {
        // Delete the dummy data from the database
        await db.query(deleteAI, [dummyData.tool_id]);
        // Close the database connection
        db.end();
    });

    test("GET ai should return all AI tools", async () => {
        const response = await request(app).get("/ai");
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("GET /ai/:contentType should return AI tools by content type", async () => {
        const contentType = 'text'; // Content type to filter by
        const response = await request(app).get(`/ai/${contentType}`);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("DELETE /ai/:tool_id should delete an AI tool", async () => {
        const response = await request(app).delete(`/ai/${dummyData.tool_id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("tool_id", dummyData.tool_id);
    });
});
