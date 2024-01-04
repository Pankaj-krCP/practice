const express = require("express");
const { sequelize } = require("./models");
const { createUser, getUsers } = require("./controller");

const app = express();

app.use(express.json());

app.post("/createUser", createUser);

app.get("/getUsers", getUsers);

app.listen(3000, async () => {
  console.log("server is running");
  await sequelize.authenticate();
});
