// function a() {
//   console.log("a");
// }
var a = function () {
  console.log("A");
};

function showfunc(callback) {
  callback();
}
showfunc(a);
