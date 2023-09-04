$(document).ready(function () {


    $("#stream1_btn").on(function () {
        $(".stream1").hide(); //the opposite of "slow", can be also used with speed
        $(".stream1").show("slow"); //exemple of speed
        $(".stream1").show("medium");
        $(".stream1").show("fast");
        $(".stream1").show(1000);
    });
    $("#stream1_btn").on(function () {
        $(".stream1").toggle(); //ether hide or show depending on the order, use also .slideToggle or .fadeToggle
        $(".stream1").toggle(1000);
    });
    $("#stream1_btn").on(function () {
        $(".stream1").slideDown(); //or the opposite .slideUp
        $(".stream1").slideDown(1000); //or the opposite .slideUp
    });
    $("#stream1_btn").on(function () {
        $(".stream1").fadeIn(); //fades in a hidden element
        $(".stream1").fadeIn(1000);
    });
    $("#stream1_btn").on(function () {
        $(".stream1").fadeOut(); //fades out a visible element
        $(".stream1").fadeOut(1000);
    });
    $("#stream1_btn").on(function () {
        $(".stream1").fadeTo(1000, 0.5); //with two arguments, speed and opacity (between 0 and 1)
    });

    $("#myButton").removeClass("blueBox").addClass("border");
    $("p").css("color", "blue").slideUp(2000).slideDown(2000);
    $("a").attr("href", "http://www.example.com");




}); 
