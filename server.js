import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

// JSON fayldan ma'lumotni o'qish
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

// Barcha retseptlarni qaytarish
app.get("/recipes", (req, res) => {
  res.json(data.recipes);
});

// Bitta retsept (id bo‘yicha)
app.get("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = data.recipes[recipeId];
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
