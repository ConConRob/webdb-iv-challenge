exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "Ham Pizza", dish_id: 1 },
        { id: 2, name: "Veg Pizza", dish_id: 1 },
        { id: 3, name: "Green Salad", dish_id: 2 },
        { id: 4, name: "Grand Cheese Burger", dish_id: 3 }
      ]);
    });
};
