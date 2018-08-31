//This code will return all pet journal entries

//make API GET request to pull back journal entries
$.get("/api", function(data) {

for (var i=0; i <data.length; i++) {
    var petEntry = $("<div>");
    petEntry.addClass("entry");
    petEntry.attr("id", "petID" + i);
    //change #pet-section to match what's in the HTML
    $("#pet-section").prepend(petEntry);



}

});