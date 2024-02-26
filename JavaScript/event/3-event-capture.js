var divs = document.querySelectorAll("div");

divs.forEach(function (div) {
  div.addEventListener("click", logEvent, {
    capture: true,
  });
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
