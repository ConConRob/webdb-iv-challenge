exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(table) {
    table.increments();
    table.varchar("name", 255).notNullable()
    table
      .integer("dish_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete('CASCADE');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
