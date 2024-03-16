// let citataWrapper = document.querySelector(".myCitata");
// let citataBtn = document.querySelector("#btn_citata");
// let counter = 0;
// let sitata = [
//   {
//     id: 1,
//     text: `it is my ${counter} citata`,
//   },
//   {
//     id: 2,
//     text: `it is my ${counter} citata`,
//   },
//   {
//     id: 3,
//     text: `it is my${counter} citata`,
//   },
//   {
//     id: 4,
//     text: `it is my ${counter} citata`,
//   },
// ];
// citataBtn.addEventListener("click", function () {
//   if (counter < sitata.length) {
//     let newLi = document.createElement("li");
//     newLi.textContent = sitata[counter].text;
//     citataWrapper.append(newLi);
//     counter++;
//     console.log(counter);
//   }
// });

/* task1 */
// let citataWrapper = document.querySelector(".myCitata");
// let citataBtn = document.querySelector("#btn_citata");
// let counter = 0;
// citataBtn.addEventListener("click", function () {
//   if (counter < 4) {
//     let newLi = document.createElement("li");
//     let text = `it is my ${counter + 1} citata`;
//     newLi.textContent = text;
//     citataWrapper.appendChild(newLi);
//     counter++;
//   }
// });
/* task2 */

const colors = ["red", "green", "aqua", "blue", "yellow"];
let box1 = document.querySelector(".box1");
function changeColor() {
  let colorIndex = Math.floor(Math.random() * colors.length);
  box1.style.backgroundColor = colors[colorIndex];
}

box1.addEventListener("mousemove", changeColor);
