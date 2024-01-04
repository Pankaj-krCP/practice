const express = require("express");
const { sequelize } = require("./models");

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.listen(3000, async () => {
  console.log("server is running");
  await sequelize.authenticate();
});
