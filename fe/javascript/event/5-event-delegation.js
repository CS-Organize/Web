/* let inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("click", function (event) {
    alert("Clicked on " + event.currentTarget.id);
  });
}); */

let itemLists = document.querySelector(".itemList");
itemLists.addEventListener("click", function (event) {
  alert("Clicked on " + event.target.id);
});

let li = document.createElement("li");
let input = document.createElement("input");
let label = document.createElement("label");
let labelText = document.createTextNode("이벤트 위임 학습");

input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
label.setAttribute("for", "item3");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemLists.appendChild(li);
