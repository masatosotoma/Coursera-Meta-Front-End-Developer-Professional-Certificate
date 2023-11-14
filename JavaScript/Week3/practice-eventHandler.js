//Task1
var h1 = document.querySelector("h1");

//Taks2
var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

//Task3
function clickHandle() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
  }
}
