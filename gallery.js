/*tomb = ["alma", "körte", "kutya", "macska"];

console.log("Hello");

const newDiv = document.createElement("div");
newDiv.innerHTML = "HELLo";
document.body.appendChild(newDiv);
*/

const container = document.querySelector("#container");
const ValamiDiv = document.querySelector("#ValamiDiv");
const kepek = ["delfin.jpg", "kutya.jpg", "cica.jpg"];

for (const kep of kepek) {
  const img = document.createElement("img");
  img.src = "img/" + kep;
  img.width = "200";
  console.log("kep:" + img.src);
  container.appendChild(img);
  addEventListener("click", function () {
    console.log(this.src);
    targetImg.src = this.src;
  });
}
