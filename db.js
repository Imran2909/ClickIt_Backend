const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect("mongodb+srv://kirti:kirti@cluster0.xxyu7.mongodb.net/Photography?retryWrites=true&w=majority");
module.exports = { connection };
