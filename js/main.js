$(document).ready(function(){
    $('.slider').slick({
        focusOnSelect: true,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right')
    });
})

$(document).ready(function () {
    
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
      $(".menu").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
      });
    });
  
    $(".cross").click(function () {
      $(".menu").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
      });
    });
  
  });
