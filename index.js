const numImages = 4;
const letters = ["a", "b", "c", "d"];

let i = 2;

const main = () => {
  console.log("teststests");
  const image = document.querySelector("#img");
  image.src = `images/nb${i}.jpeg`;
  i++;
  if (i === 13) {
    i = 1;
  }
};

setInterval(() => {
  main();
}, 1000);
// document.onload(() => {
// });
// }, 1000);
