const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Product API is running");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.use("/api/products", productRoutes);

module.exports = app;