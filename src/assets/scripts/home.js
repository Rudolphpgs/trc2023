(function ($) {
  $(function () {
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
