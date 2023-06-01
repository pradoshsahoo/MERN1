const button = document.getElementById("submit");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
button.addEventListener("click", () => {
  fetch("http://localhost:5501/user", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data.find(
        (el) => el.email === email.value && el.password === password1.value
      );
      console.log(user);
      if (user) {
        alert("Logged in Successfully");
        window.location.href = "./index.html";
      } else {
        document.getElementById("error").innerText = "Invalid credentials!";
      }
    });
});
