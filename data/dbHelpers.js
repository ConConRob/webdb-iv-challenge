const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .where("id", "=", id)
    .first();
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      return getDish(ids[0]);
    });
}

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where("id", "=", id)
    .first();
}

function addRecipe(recipe) {
  return db("recipes")
    .instert(recipe)
    .then(ids => {
      return getRecipe(ids[0]);
    });
}
