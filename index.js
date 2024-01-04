const express = require("express");
const { User } = require("./models");

const app = express();

app.use(express.json());

app.post("/createUser");

app.listen(3000, async () => {
  console.log("server is running");
  await User.sync({ force: true });
});
