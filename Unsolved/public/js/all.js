//This code will return all pet journal entries

//make API GET request to pull back journal entries
$.get("/api", function(data) {

for (var i=0; i <data.length; i++) {
    var petEntry = $("<div>");
    petEntry.addClass("entry");
    petEntry.attr("id", "petDiv" + i);
    //change #pet-section to match what's in the HTML
    $("#pet-section").prepend(petEntry);

$("#petDiv" + i).append("<h2>" + data[i].petName + "</h2>");
$("#petDiv" + i).append("<h3>Date: "+ data[i].createDate + "</h3>");
$("#petDiv" + i).append("<h3>Journal Entry " + data[i].textbox + "</h3>");
    }
});