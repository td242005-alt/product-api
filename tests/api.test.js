
const test = require("node:test");
const assert = require("node:assert/strict");

async function api(method, path) {
    return fetch(`http://localhost:3000${path}`, {
        method: method
    });
}

test("Product API CI tests", async (t) => {
    await t.test("GET product not found", async () => {
        const response = await api("GET", "/api/products/999999");
        assert.strictEqual(response.status, 404);
    });

    await t.test("GET product 888888 not found", async () => {
        const response = await api("GET", "/api/products/888888");
        assert.strictEqual(response.status, 404);
    });
});
