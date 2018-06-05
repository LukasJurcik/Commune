///// Carousel
$(function() {
    $('body').addClass('ready');
    var $carousel = $('.carousel').flickity({
        wrapAround: false,
        fullscreen: false,
        draggable: true,
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        cellAlign: 'right'
    });
});


///// Navigation
$(document).ready(function () {
    $(".responsive-nav__menu").click(function () {
        $(".navigation").slideToggle(500);
    })
})






