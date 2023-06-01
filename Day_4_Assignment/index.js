// import fetch from "node-fetch";
fetch("http://localhost:5501/data", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => renderData(data));
function renderData(data) {
  const foodBox = document.getElementById("showmovies");
  data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const foodTitle = document.createElement("h3");
    foodTitle.innerText = el.title;
    const foodRating = document.createElement("p");
    foodRating.id = "rate";
    foodRating.innerText = `${el.rating}/5`;
    const p1 = document.createElement("p");
    p1.innerText = el.desc;
    p1.id = "pdesc";
    const button1 = document.createElement("button");
    button1.innerText = "MORE";
    const button2 = document.createElement("button");
    button2.innerText = "LESS";
    button1.addEventListener("click", () => {
      p1.style.display = "block";
      image.style.opacity = 0.3;
    });
    button2.addEventListener("click", () => {
      p1.style.display = "none";
      image.style.opacity = 1;
    });
    div.append(image, foodTitle, foodRating, button1, button2, p1);
    foodBox.append(div);
  });
}
