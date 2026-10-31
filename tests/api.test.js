
const test = require("node:test");
const assert = require("node:assert/strict");

const BASE_URL = "http://localhost:3000";

async function api(method, path) {
    return fetch(`${BASE_URL}${path}`, {
        method: method
    });
}

test("Product API - Cau 8 CI/CD", async (t) => {

    await t.test("GET danh sach san pham", async () => {
        const response = await api("GET", "/api/products");
        assert.strictEqual(response.status, 200);
    });

    await t.test("GET san pham khong ton tai 999999", async () => {
        const response = await api("GET", "/api/products/999999");
        assert.strictEqual(response.status, 404);
    });

    await t.test("GET san pham khong ton tai 888888", async () => {
        const response = await api("GET", "/api/products/888888");
        assert.strictEqual(response.status, 404);
    });

});
