const { User } = require("../models");

async function createUser(req, res) {
  const { name, email } = req.body;
  try {
    const user = await User.create({ name, email });
    res.send(user);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err: "data creation failed" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).send({ err: "fetch err" });
  }
}

module.exports = {
  createUser,
  getUsers,
};
