const wordOrSentence = document.querySelector(".text-input");
const word = document.querySelector(".text");
const btn = document.querySelector(".btn");
console.log(wordOrSentence);

function creatLetter() {
  const wordFromInput = wordOrSentence.value.split("");
  return wordFromInput.map((letter) => `<span>${letter}</span>`);
}

btn.addEventListener("click", () => {
  word.innerHTML = creatLetter().join("");
});

word.addEventListener("click", (event) => {
  console.log(event.target);
});
