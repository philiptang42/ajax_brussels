$("#get-dish").on("click", function() {
  $.get("/new-dish.json", function(newDish) {
    alert(newDish["random_dish"]);
  });
});
