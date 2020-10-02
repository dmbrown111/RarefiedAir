// Page Scroller
function scrollPage() {
  var element = document.getElementById("mainGraphicContainer");

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
