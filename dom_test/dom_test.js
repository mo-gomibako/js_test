function dom_test() {
  let a = 1;
  let d1 = `document.getElementById("div${a}")`;
  d1 = document.getElementsByClassName("a");
  let d2 = `getElementById("div${a}")`;
  d1.insertAdjacentHTML("beforeend", '<div id="a">aiueo</div>');
  document.getElementById("a").insertAdjacentHTML("beforeend", '<input type="number"></div>');
}

function makeDiv() {
  document.getElementById("a").insertAdjacentHTML("beforeend", "<div></div>");
}

function getElement() {
  console.log(typeof document.getElementsByClassName("a"));
}

console.log(d1.nodetype);
