$(document).ready(function(){
    $("header").load("header.html", () => {
        $(".nav-btn").click( () => {
            $("nav").slideToggle();
            $(".nav-close-btn").css("display", "block");
            $(".nav-btn").css("display", "none");
        });
        $(".nav-close-btn").click( () => {
            $("nav").slideToggle();
            $(".nav-close-btn").css("display", "none");
            $(".nav-btn").css("display", "flex");
        });
    });
});