const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let btn = document.querySelector("#generate-button");
let generatedpass = document.querySelector("#generated-password");
let generatedpass2 = document.querySelector("#generated-password2");

btn.addEventListener("click", function () {
  if (generatedpass.textContent !== "") {
    generatedpass.textContent = "";
  }
  let gnpass = [];
  let gnpass2 = [];
  for (let i = 0; i < 15; i++) {
    gnpass.push(characters[Math.floor(Math.random() * characters.length)]);
    gnpass2.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  generatedpass.textContent = gnpass.join("");
  generatedpass.setAttribute("title", gnpass.join(""));
  generatedpass2.textContent = gnpass2.join("");
  generatedpass2.setAttribute("title", gnpass2.join(""));
});

function passwordCopied(item) {
  let getEl = document.querySelector(`#${item}`);
  getEl.select();
  getEl.setSelectionRange(0, 99999);
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + `${getEl.value}`;
  navigator.clipboard.writeText(getEl.value);
}
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
