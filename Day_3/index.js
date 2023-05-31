const data = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Stranger things",
    rating: 4.6,
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    title: "Pirates",
    rating: 5,
  },
];

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
