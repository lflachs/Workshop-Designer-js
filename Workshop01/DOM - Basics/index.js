const box = document.querySelector("#box");

// const box = box.getElementById('box');
// const box = box.getElementsByClassName('box');

box.addEventListener("click", function () {
  if (box.style.backgroundColor == "red") {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "red";
  }
});
