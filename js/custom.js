$(function () {
  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 300) {
      $(".header").addClass("on");
    } else {
      $(".header").removeClass("on");
    }
  });

  $(".visual_slide").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
  });

  $(".main_right_slide").slick({
    arrows: true,
    dots: true,
  });

  $(".main_right_slide").on("afterChange", function (e, s, c) {
    //c - 0,1,2...8
    $(".main_content_left .left_text li").removeClass("on");
    $(".main_content_left .left_text li").eq(c).addClass("on");

    $(".main_right_slide .slick-dots>li button").removeClass("on");
    $(".main_right_slide .slick-dots>li button").eq(c).addClass("on");
  });

  $(".info_arrow").mouseover(function () {
    $(".info_arrow").addClass("on");
  });

  $(".info_arrow").mouseout(function () {
    $(".info_arrow").removeClass("on");
  });
  $(".notice_left_arrow").mouseover(function () {
    $(".notice_left_arrow").addClass("on");
  });

  $(".notice_left_arrow").mouseout(function () {
    $(".notice_left_arrow").removeClass("on");
  });
  $(".notice_right_arrow").mouseover(function () {
    $(".notice_right_arrow").addClass("on");
  });

  $(".notice_right_arrow").mouseout(function () {
    $(".notice_right_arrow").removeClass("on");
  });
});
