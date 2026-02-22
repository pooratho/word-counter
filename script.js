const textareaEl = document.querySelector(".textarea");
const numberOfCharactersEl = document.querySelector(
  ".state__number--characters",
);
const wordNumberEl = document.querySelector(".state__number--words");
const twitterNumberEl = document.querySelector(".state__number--twitter");
const facebookNumberEl = document.querySelector(".state__number--facebook");

const inputHandler = () => {
  if (textareaEl.value.includes("<script>")) {
    alert("Wrong input!");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 200 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("state__number--limit");
  } else {
    twitterNumberEl.classList.remove("state__number--limit");
  }
  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("state__number--limit");
  } else {
    facebookNumberEl.classList.remove("state__number--limit");
  }

  wordNumberEl.textContent = numberOfWords;
  numberOfCharactersEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener("input", inputHandler);
