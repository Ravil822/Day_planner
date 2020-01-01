// get current date and time using moment.js
var m = moment()
var currentDate = m.format('MMMM Do YYYY, h:mm:ss a');
$("#timer").html(currentDate)

// Using setInterval method to call a function to display the time dinamically
setInterval(function(){
    var m = moment()
var currentDate = m.format('MMMM Do YYYY, h:mm:ss a');
$("#timer").html(currentDate)
}, 1000);

// change color function 
function updateColor(){
    var currentHour = m.hours(); 
    $(".form-control").each(function(){
        var eventHour = $(this).attr("id");
        // console.log(currentHour);
        // console.log(eventHour);
        if (eventHour < currentHour) {
            $(this).attr("style", "background-color: lightgray")
        }
        else if (eventHour == currentHour) {
            $(this).attr("style", "background-color: lightsalmon")
        }

    });


}
updateColor(); // call the function




// Set user event to the localstorage

$(".btn9").on("click", function(event){
    event.preventDefault();
    var userEvent9 = $("#9").val().trim();
    localStorage.setItem("event 9am", userEvent9 )
});

$(".btn10").on("click", function(event){
    event.preventDefault();
    var userEvent10 = $("#10").val().trim();
    localStorage.setItem("event 10am", userEvent10 )
});

$(".btn11").on("click", function(event){
    event.preventDefault();
    var userEvent11 = $("#11").val().trim();
    localStorage.setItem("event 11am", userEvent11 )
});

$(".btn12").on("click", function(event){
    event.preventDefault();
    var userEvent12 = $("#12").val().trim();
    localStorage.setItem("event 12pm", userEvent12 )
});

$(".btn13").on("click", function(event){
    event.preventDefault();
    var userEvent13 = $("#13").val().trim();
    localStorage.setItem("event 1pm", userEvent13 )
});

$(".btn14").on("click", function(event){
    event.preventDefault();
    var userEvent14 = $("#14").val().trim();
    localStorage.setItem("event 2pm", userEvent14 )
});

$(".btn15").on("click", function(event){
    event.preventDefault();
    var userEvent15 = $("#15").val().trim();
    localStorage.setItem("event 3pm", userEvent15 )
});

$(".btn16").on("click", function(event){
    event.preventDefault();
    var userEvent16 = $("#16").val().trim();
    localStorage.setItem("event 4pm", userEvent16 )
});

$(".btn17").on("click", function(event){
    event.preventDefault();
    var userEvent17 = $("#17").val().trim();
    localStorage.setItem("event 5pm", userEvent17 )
});


// get event from the localstorage

function PreviosEvent() {
    $("#9").val(localStorage.getItem("event 9am"))
    $("#10").val(localStorage.getItem("event 10am"))
    $("#11").val(localStorage.getItem("event 11am"))
    $("#12").val(localStorage.getItem("event 12pm"))
    $("#13").val(localStorage.getItem("event 1pm"))
    $("#14").val(localStorage.getItem("event 2pm"))
    $("#15").val(localStorage.getItem("event 3pm"))
    $("#16").val(localStorage.getItem("event 4pm"))
    $("#17").val(localStorage.getItem("event 5pm"))
}
PreviosEvent() // call the function



