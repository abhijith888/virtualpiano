const pianoKeys = document.querySelectorAll(".piano-keys .key");
const audio = new Audio();

function playTune(key) {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach(key => {
  key.addEventListener("click", () => {
    const dataKey = key.dataset.key;
    playTune(dataKey);
  });
});

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key;
  if (Array.from(pianoKeys).some(key => key.dataset.key === pressedKey)) {
    playTune(pressedKey);
  }
});
