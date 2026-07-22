const request = require("supertest");
const app = require("./app");

describe("Jenkins Node.js Application", () => {

    test("Home page should return status 200", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Jenkins CI/CD Pipeline");
    });

    test("Health endpoint should return UP", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });

});