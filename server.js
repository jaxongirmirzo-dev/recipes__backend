const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const recipes = require("./data.json");

app.get("/recipes", (req, res) => {
  res.json(recipes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
