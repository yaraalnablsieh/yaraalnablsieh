let Mshow = document.getElementById("show");
let d = 0;
function Show() {
  if (d == 0) {
    Mshow.style.display = "flex";
    d = 1;
  } else {
    Mshow.style.display = "none";
    d = 0;
  }
}
