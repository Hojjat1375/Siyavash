/** @format */

let card = document.querySelector(".card");
let audio = document.querySelector("audio");
let intIdDecresae;
let intIdIncrease;
card.addEventListener("mouseenter", () => {
  audio.play();
  clearInterval(intIdDecresae);
  audio.volume = 0.1;
  intIdIncrease = setInterval(() => {
    if (audio.volume >= 0.9999999999999999) {
      audio.volume = 1;
    } else {
      audio.volume += 0.1;
      console.log(audio.volume);
    }
  }, 100);
});


card.addEventListener("mouseleave", () => {
  clearInterval(intIdIncrease);

  audio.volume = 1;
  intIdDecresae = setInterval(() => {
    if (audio.volume <= 0.10000000000000014) {
      audio.volume = 0.1;
      clearInterval(intIdDecresae);
    } else {
      audio.volume -= 0.1;
      console.log(audio.volume);
    }
  }, 100);

  setTimeout(() => {
    audio.pause();
  }, 1000);
});
