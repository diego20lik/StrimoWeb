function downloadWhitePaper() {
  $.ajax({
    url: "/download_white_paper",
    method: "GET",
    xhrFields: {
      responseType: "blob",
    },
    success: function (data) {
      var a = document.createElement("a");
      var url = window.URL.createObjectURL(data);
      a.href = url;
      a.download = "STRIMO WP.pdf";
      document.body.append(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    },
  });
}
function checkElementLocation() {
  var bottomWindown = $(window).scrollTop() + $(window).height();
  $(".fade").each(function (i) {
    var $that = $(this);
    var bottomObject = $that.offset().top + 100;
    if (bottomWindown > bottomObject) {
      $(this).addClass("fade-in");
    }
  });
  $(".roadmap-fade").each(function (i) {
    var $that = $(this);
    var bottomObject = $that.offset().top + 100;
    if (bottomWindown > bottomObject) {
      $(this).addClass("roadmap-fade-in");
    }
  });
}
function checkNavBg() {
  if ($(".nav").hasClass("nav-change-bg")) {
    if ($(window).scrollTop() == 0) {
      $(".nav").removeClass("nav-change-bg");
      $(".nav-a").removeClass("nav-a-change-bg");
      $(".logo").attr("src", "/media/strimo-logow.png");
      return;
    }
    return;
  }
  if ($(window).scrollTop() > 0) {
    $(".nav").addClass("nav-change-bg");
    $(".nav-a").addClass("nav-a-change-bg");
    $(".logo").attr("src", "/media/strimo-logob.png");
  }
}
$(window).on("scroll", function () {
  checkElementLocation();
  checkNavBg();
});
$(document).ready(function () {
  checkElementLocation();
});
