$(document).ready(function() {
    $(".timeline").addClass("normal");
    $(".timeline article").click(function() {
        $(".timeline").toggleClass("normal");
    });
});