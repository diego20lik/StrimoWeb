function displayMenu(parentClass, childClass) {
  if ($(`.${childClass}`).is(":visible")) {
    $(`.${childClass}`).toggle(false);
    $(document).unbind("mouseup");
    return;
  }
  $(`.${childClass}`).toggle(true);
  checkForClose(parentClass, childClass);
}
function checkForClose(parentClass, childClass) {
  $(document).mouseup(function (e) {
    var container = $(`.${childClass}`);
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      !$(`.${parentClass}`).is(e.target)
    ) {
      $(`.${childClass}`).toggle(false);
      $(document).unbind("mouseup");
      return;
    }
  });
  return;
}
$(document).ready(() => {
  $(".more-menu").hide();
  $(".settings-menu").hide();
});
