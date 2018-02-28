// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-fake").on("click", function(event) {
    var id = $(this).data("id");
    var newfake = $(this).data("newfake");
    var newfakeState = {
      fake: newFake
    };
    // Send the PUT request.
    $.ajax("/api/article/" + id, {
      type: "PUT",
      data: newFakeState
    }).then(
      function() {
        console.log("changed article to", newFake);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".create-fake").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newFake = {
      name: $("#article").val().trim(),
      sleepy: $("[name=fake]:checked").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/article", {
      type: "POST",
      data: newFake
    }).then(
      function() {
        console.log("created new article");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".delete-article").on("click", function(event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted fake", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});