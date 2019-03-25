exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipeToIngredients", function(table) {
    table.increments();
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipeToIngredients")
};
