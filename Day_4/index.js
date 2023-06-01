// import fetch from "node-fetch";
fetch("http://localhost:5501/data", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => renderData(data));
function renderData(data) {
  const movieBox = document.getElementById("showmovies");
  data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const movieRating = document.createElement("p");
    movieRating.innerText = `${el.rating}/5`;
    const button = document.createElement("button");
    button.innerText = "VIEW";
    button.addEventListener("click", () => {
      alert(`You are viewing ${el.title}`);
    });
    div.append(image, movieTitle, movieRating, button);
    movieBox.append(div);
  });
}
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch("http://localhost:5501/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      id: Date.now(),
    }),
    // body: JSON.stringify({
    //   image:
    //     "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    //   title: "Pirates",
    //   rating: 5,
    // }),
  }).then((response) => console.log(response));
});
