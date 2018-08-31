//Add.js handles what happens when a user submits a new pet
//When the user clicks on the new-add button
//Change #add-pet to the name of the submit button
$(".#add-pet").on("click", function (event) {
    event.preventDefault();

//Add a new pet object
var newPet = {
    name: $("#petName").val().trim(),
    breed: $("#petBreed").val().trim(),
//Add any other pet attributes that match the SQL Schema

}

$.post("api/new", newPet)
.then(function (data) {
});

$("#petName").val("");
$("#petBreed").val("");
//Add any other rows for other pet attributes that are added

});
