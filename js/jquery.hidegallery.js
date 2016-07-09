$(document).ready(function () {
    $("#starwars").click(function () {
        $("#cars").fadeOut();
        $("#planes").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#sw").fadeIn("slow");
    })
    $("#crs").click(function () {
        $("#sw").fadeOut();
        $("#planes").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#cars").fadeIn("slow");
    })
    $("#shps").click(function () {
        $("#sw").fadeOut();
        $("#planes").fadeOut();
        $("#tanks").fadeOut();
        $("#cars").fadeOut();
        $("#ships").fadeIn("slow");
    })
    $("#plns").click(function () {
        $("#sw").fadeOut();
        $("#cars").fadeOut();
        $("#tanks").fadeOut();
        $("#ships").fadeOut();
        $("#planes").fadeIn("slow");
    })
})