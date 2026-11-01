

const test = require("node:test");
const assert = require("node:assert/strict");

const BASE_URL = "http://localhost:3000";

async function api(method, path) {
    return fetch(`${BASE_URL}${path}`, {
        method: method
    });
}

test("Product API - Cau 8 CI/CD", async (t) => {

    await t.test("GET danh sach san pham", async () =>
        assert.strictEqual((await api("GET", "/api/products")).status, 200));

    await t.test("GET san pham khong ton tai 999999", async () =>
        assert.strictEqual((await api("GET", "/api/products/999999")).status, 404));

    await t.test("GET san pham khong ton tai 888888", async () =>
        assert.strictEqual((await api("GET", "/api/products/888888")).status, 404));

    await t.test("GET san pham khong ton tai 777777", async () =>
        assert.strictEqual((await api("GET", "/api/products/777777")).status, 404));

});
//docker exec nammongodb mongosh productdb --eval "db.products.find().toArray()"
