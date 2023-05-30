button1 = document.getElementById("more");
button1.addEventListener("click", () => {
  edu = document.getElementsByClassName("edu")[0];
  edu.style.display = "flex";
  edu.style.justifyContent = "space-evenly";
});
button2 = document.getElementById("less");
button2.addEventListener("click", () => {
  edu = document.getElementsByClassName("edu")[0];
  edu.style.display = "none";
});

add = document.getElementById("add");
add.addEventListener("click", () => {
  div1 = document.getElementsByClassName("int")[0];
  div1.className = "int";
  div2 = document.createElement("div");
  div2.className = "intcard";
  div3 = document.createElement("div");
  div3.className = "cardtext";
  div3.innerText = "ExpressJS";
  image = document.createElement("img");
  image.className = "card_img";
  image.src = "https://friconix.com/jpg/fi-hnsuxx-nodejs.jpg";
  div2.append(image);
  div2.append(div3);
  div1.append(div2);
});
remove = document.getElementById("remove");
remove.addEventListener("click", () => {
  window.location.reload();
});
