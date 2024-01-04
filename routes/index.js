const { getDefaultResultOrder } = require("dns");
const { getUsers, createUser } = require("../controller");
const express = require("express");

const route = express.Router();

route.get("/getUsers", getUsers);
route.post("/createUser", createUser);

module.exports = route;
