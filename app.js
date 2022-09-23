const express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

const productRoute = require('./routes/product.route');

//get method
app.use('/api/v1/product',productRoute)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Anas" });
});




module.exports = app;
