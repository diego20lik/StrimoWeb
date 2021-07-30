$("#toButton").click(() => {
  $(".overlay").addClass("show-popUp");
});
$("#fromButton").click(() => {
  $(".overlay").addClass("show-popUp");
});
$(".overlay").on("click", function (e) {
  if (e.target !== this) return;

  $(".overlay").removeClass("show-popUp");
});
$(".close-pop-up").on("click", function (e) {
  $(".overlay").removeClass("show-popUp");
});
