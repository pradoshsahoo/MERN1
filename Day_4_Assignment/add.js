const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const rating = document.getElementById("rating").value;
  const desc = document.getElementById("desc").value;
  fetch("http://localhost:5501/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      rating: rating,
      image: image,
      desc: desc,
      id: Date.now(),
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Food added successfully");
        return response.json();
      } else {
        alert("Something went wrong");
      }
    })
    .then((data) => {
      window.location.href = "./index.html";
    });
});
