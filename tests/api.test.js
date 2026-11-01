

const test = require("node:test");
const assert = require("node:assert/strict");

const BASE_URL = "http://localhost:3000";

async function api(method, path) {
    return fetch(`${BASE_URL}${path}`, { method });
}

test("Product API - Cau 8 CI/CD", async (t) => {

    await t.test("GET tat ca san pham", async () => {
        const res = await api("GET", "/api/products");
        assert.equal(res.status, 200);
    });

    await t.test("GET san pham khong ton tai 111111", async () => {
        const res = await api("GET", "/api/products/111111");
        assert.equal(res.status, 404);
    });

    await t.test("GET san pham khong ton tai 222222", async () => {
        const res = await api("GET", "/api/products/222222");
        assert.equal(res.status, 404);
    });

    await t.test("GET san pham khong ton tai 444444", async () => {
        const res = await api("GET", "/api/products/444444");
        assert.equal(res.status, 404);
    });

});
