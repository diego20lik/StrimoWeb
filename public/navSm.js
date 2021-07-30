function smallScreenMenu(bol) {
  if (bol) {
    $(".nav-menu-hide-tlf").show();
    $(".nav-menu-hide-tlf").removeClass("hide");
    $(".nav-menu-hide-tlf").addClass("show");
    return;
  }
  $(".nav-menu-hide-tlf").removeClass("show");
  $(".nav-menu-hide-tlf").addClass("hide");
  setTimeout(() => {
    $(".nav-menu-hide-tlf").hide();
  }, 1000);
}
