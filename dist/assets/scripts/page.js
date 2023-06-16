(function ($) {
  $(function () {
    var off_ = $(window).width() > 1024 ? "20%" : "10%";
    $(".pageSection").viewportChecker({
      classToAdd: "inView",
      // offset: off_,
    });
    $(".pageBanner").viewportChecker({
      classToAdd: "inView",
    });

    setTimeout(function () {
      $("body").addClass("loadScale");
      setTimeout(function () {
        $("body").addClass("is-loaded");
        setTimeout(function () {
          $(".loader").remove();
        }, 400);
      }, 600);
    }, 250);
  });
})(jQuery);
