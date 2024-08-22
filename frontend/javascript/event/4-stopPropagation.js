var divs = document.querySelectorAll("div");

divs.forEach(function (div) {
  div.addEventListener("click", logEvent, {
    // capture: true
  });
});

function logEvent(event) {
  event.stopPropagation();
  console.log(event.currentTarget.className);
}
