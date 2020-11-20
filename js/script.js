$(document).ready(function () {
  //   console.log($(window).scrollTop());

  $(document).scroll(function () {
    let scrollTop = $(window).scrollTop();
    console.log($(window).scrollTop());

    if (scrollTop >= 0 && scrollTop <= 929) {
      $("#home").removeClass("on");
      $("#step").removeClass("on");
      $("#review").removeClass("on");
      $("#about").removeClass("on");
    }
    if (scrollTop >= 930 && scrollTop <= 2000) {
      $("#step").addClass("on");
      $("#home").removeClass("on");
      $("#review").removeClass("on");
      $("#about").removeClass("on");
    }
    if (scrollTop >= 2100 && scrollTop <= 2300) {
      $("#home").removeClass("on");
      $("#step").removeClass("on");
      $("#review").addClass("on");
      $("#about").removeClass("on");
    }
    if (scrollTop >= 2350) {
      $("#home").removeClass("on");
      $("#step").removeClass("on");
      $("#review").removeClass("on");
      $("#about").addClass("on");
    }
  });

  $(".up a").click(function () {
    $(window).scrollTop(0);
  });
});
