const supertest = require("supertest");
const baseURL = "http://localhost:3000"

describe("GET /dishes", () => {
    it("should return 200", async () => {
        await supertest(baseURL).get('/dishes').expect(200);
    });

    it("should return all dishes", async () => {
       const response = await supertest(baseURL).get("/dishes");
       expect(response.body.length >= 1).toBe(true);
    });
})