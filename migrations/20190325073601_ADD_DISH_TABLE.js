exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(table) {
    table.increments(); 
    table.varchar("name", 255).notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
