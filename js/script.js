$(document).ready(function () {
  $(".up a").click(function () {
    $(window).scrollTop(0);
  });

  $(document).on("click", ".navbar-nav li", function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
});
