$(document).ready(function() {
$('.zooming img').mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "7%", height: "7%"}, 'slow');
});

// $('.zooming img').mouseleave(function() {   
//     $(this).animate({width: "10%"}, 'slow');
// });
});