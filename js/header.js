$(document).ready(() => {
  $(".hasIcon").each(function () {
    let iconName = $(this).attr("icon-name");
    $(this).css("--before-img", `url('${ICON_URLS[iconName]}')`);
  });
  // rotate anim for menu of header
  $(".menu").on("click", () => {
    $(".topicon").toggleClass("rotated");
    $(".Navmenu").toggleClass("hide");
  });
  
  $(".clickable").on("click", function () {
    $(this).toggleClass("clicked");
  });

  $(".hasIcon").on("click", function () {
    this_url = $(this).attr("url")
    $(".topicon").toggleClass("rotated");
    window.location.href = PAGE_URLS[this_url]
  });
});
