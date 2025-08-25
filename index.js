const numImages = 4;
const letters = ["a", "b", "c", "d"];

let i = 2;
let image;

const main = () => {
  image.src = `images/nb${i}.jpeg`;
  i++;
  if (i === 13) {
    i = 1;
  }
};

const init = () => {
  image = document.querySelector("#img");
  setInterval(() => {
    main();
  }, 750);
};

window.addEventListener("load", () => {
  init();
});
