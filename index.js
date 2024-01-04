const express = require("express");
const { User, sequelize } = require("./models");

const app = express();

app.use(express.json());

app.post("/createUser", async function (req, res) {
  const { name, email } = req.body;
  try {
    const users = await User.create({ name, email });
    res.send(users);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err: "data creation failer" });
  }
});

app.get("/getUsers", async function (req, res) {
  try {
    const user = await User.findAll();
    res.send(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err: "fetch error" });
  }
});

app.listen(3000, async () => {
  console.log("server is running");
  await sequelize.authenticate();
});
