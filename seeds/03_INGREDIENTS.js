exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "100g flour" },
        { id: 2, name: "2 cans of tomatoes" },
        { id: 3, name: "1/2 pound of ground beef" },
        { id: 4, name: " 100g of lettuce " },
        { id: 5, name: " 150g of ham" },
        { id: 6, name: " 2 cups of water" },
        { id: 7, name: " 1 bell pepper" },
        { id: 8, name: " 3 buns" }
      ]);
    });
};
