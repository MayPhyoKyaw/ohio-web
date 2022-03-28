$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $navbrand = $(".navbar-brand");
    // $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $navbrand.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

function fullScreenImage(element) {
  document.getElementById("modalImage").src = element.src;
  document.getElementById("imagePopup").style.display = "block";
}

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// function changeLanguage(el, lang) {
//   if (lang === "uk") {
//     if (el.className === "btn") {
//       el.className = "btn active";
//       el.nextElementSibling.className = "btn";
//     } else {
//       el.className = "btn";
//       el.nextElementSibling.className = "btn active";
//     }
//   } else {
//     if (el.className === "btn") {
//       el.className = "btn active";
//       el.previousElementSibling.className = "btn";
//     } else {
//       el.className = "btn";
//       el.previousElementSibling.className = "btn active";
//     }
//   }
// }
