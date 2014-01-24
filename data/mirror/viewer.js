document.addEventListener("click", function (event) {
  var name = event.target.tagName;
  if (name == "A" || name == "BUTTON" ||
      (name == "INPUT" && event.target.getAttribute("type") == "submit")) {
    event.preventDefault();
    return false;
  }
}, true);

document.addEventListener("focus", function (event) {
  event.preventDefault();
}, true);

var viewer = document.getElementById("viewer");
viewer.parentNode.removeChild(viewer);
