$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right')
    });
})

$(".header__menu").click(function() {
    $(".header__menu").toggleClass("active");
    $(".header__navbar").toggleClass("active");
    });
    