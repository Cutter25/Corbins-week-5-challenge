// Setting save button variable for each hour.
var saveBtn = $(".save-button");
// Putting current day and time at top of page.
$("#current-day-and-time").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// Making each hour change color with it's respective positioning, relative to user.
function timeBlockColor() {
    let hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
// If the current hour is less than Moment.js api's time, that hour has not arrived yet. 
        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
//setting the input to local storage when user inputs information and what not.
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});
// Saved events shall persist on the page
function planning() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

timeBlockColor();
planning();