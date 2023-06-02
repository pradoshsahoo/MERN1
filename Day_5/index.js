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
    const button3 = document.createElement("button");
    button3.innerText = "update";
    button3.addEventListener("click", () => {
      const uTitle = prompt("Enter the new title");
      const newObj = {
        title: uTitle,
        rating: el.rating,
        image: el.image,
        desc: el.desc,
      };
      fetch(`http://localhost:5501/data/${el.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      })
        .then((response) => response.json())
        .then((data) => alert("Updated successfully"));
    });
    const button4 = document.createElement("button");
    button4.innerText = "delete";
    button4.addEventListener("click", () => {
      fetch(`http://localhost:5501/data/${el.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => alert("Deleted successfully"));
    });
    image.style.cursor = "pointer";
    image.addEventListener("click", () => {
      localStorage.setItem("id", JSON.stringify(el.id));
      window.location.href = "./demo.html";
    });
    div.append(
      image,
      foodTitle,
      foodRating,
      button1,
      button2,
      button3,
      button4,
      p1
    );
    foodBox.append(div);
  });
}
