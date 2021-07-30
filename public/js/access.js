function changeAccessForm(form) {
  $(`.${form}`).hide();
  if (form == "login") {
    $(".register").css("display", "flex");
    return;
  }
  $(".login").css("display", "flex");
}
