const keys = document.querySelectorAll(".key");
const allKeys = Array.from(document.querySelectorAll(".key"));
const key = [65, 83, 68, 70, 71, 72, 74, 75, 76];

const playSound = (e) => {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(this);
  if (!audio) return; // stop function from running
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
};
function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound); //listening to event on the window and not document

//for onscreen clicks

for (let i = 0; i < allKeys.length && key.length; i++) {
  allKeys[i].addEventListener("click", function () {
    let sound = document.querySelector(`audio[data-key="${key[i]}"]`);
    let click = document.querySelector(`.key[data-key="${key[i]}"]`);

    if (!sound) return; // stop function from running
    sound.currentTime = 0; //rewind to start
    sound.play();
    click.classList.add("playing");
  });
}
//convert allKeys into an array

//let aKey = allKeys[0];
//let audioDataKey = document.querySelector(".key");
//var attr = audioDataKey.getAttribute("data-key");
//console.log(attr);
//console.log(audioDataKey);
//let audioDataKey = document.getElementsByClassName("key");
//for (let i = 0; i < audioDataKey.length; i++) {
//  let dataKey = audioDataKey[i].attributes[`data-key`].value;
//  console.log(dataKey);
//  //let dataArray = [`${dataKey}`];
//  //console.log(dataKey);
//}

//let dataArray = audioDataKey.map(function (key) {
//  return audioDataKey.attributes[`data-key`];
//});
//let audioDataKey = document.getElementsByClassName("key");
//for (let i = 0; i < audioDataKey.length; i++) {
//  let dataKey = audioDataKey[i].attributes[`data-key`];
//  console.log(dataKey);
//}
//let audioDataKey = document.getElementsByClassName("key");
//for (let i = 0; i < audioDataKey.length; i++) {
//  let dataKey = audioDataKey[i].attributes[`data-key`];
//
//  // console.log(dataKeyArray);
//}
//function clickSound() {
//  let key = [65, 83, 68, 70, 71, 72, 74, 75, 76];
//  for (let i = 0; i < key.length; i++) {
//    console.log(key[i]);
//  }
//}
