import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON =
  '[{"id":"1001","type":"dessert","name":"Strawberry Shortcake","price":5.49,"ingredients":{"base":{"name":"Vanilla Sponge Cake","preparation":"Baked"},"filling":{"name":"Strawberry Compote","ingredients":["Strawberries","Sugar","Lemon Juice"]},"toppings":[{"name":"Whipped Cream","quantity":"1/2 cup","ingredients":["Heavy Cream","Sugar","Vanilla Extract"]},{"name":"Fresh Strawberries","quantity":"1/4 cup","ingredients":["Strawberries"]}]}},{"id":"1002","type":"dessert","name":"Tiramisu","price":6.99,"ingredients":{"base":{"name":"Ladyfingers","preparation":"Soaked in Coffee"},"filling":{"name":"Mascarpone Cream","ingredients":["Mascarpone Cheese","Eggs","Sugar","Coffee"]},"toppings":[{"name":"Cocoa Powder","quantity":"1 teaspoon","ingredients":["Cocoa Powder"]},{"name":"Dark Chocolate Shavings","quantity":"1 tablespoon","ingredients":["Dark Chocolate"]}]}},{"id":"1003","type":"dessert","name":"Chocolate Lava Cake","price":4.99,"ingredients":{"base":{"name":"Chocolate Cake","preparation":"Baked"},"filling":{"name":"Molten Chocolate","ingredients":["Dark Chocolate","Butter","Sugar","Egg"]},"toppings":[{"name":"Powdered Sugar","quantity":"1 teaspoon","ingredients":["Sugar"]},{"name":"Vanilla Ice Cream","quantity":"1 scoop","ingredients":["Milk","Cream","Vanilla","Sugar"]},{"name":"Fresh Berries","quantity":"1/4 cup","ingredients":["Strawberries","Blueberries","Raspberries"]}]}}]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case "Strawberry Shortcake":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "Tiramisu":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "Chocolate Lava Cake":
      data = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
