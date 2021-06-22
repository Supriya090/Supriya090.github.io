$(document).ready(function () {
  $(".navbar-nav li a").click(function (e) {
    $(".navbar-nav li a.active").removeClass("active");
    $(this).addClass("active");
    // e.preventDefault();
  });
});
