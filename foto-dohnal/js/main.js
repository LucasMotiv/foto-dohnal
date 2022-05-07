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

  $(".images img").click(function(){
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
  });
  
  $("#image-viewer .close").click(function(){
    $('#image-viewer').hide();
  }); 

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img02");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img03");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
