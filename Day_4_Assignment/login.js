const button = document.getElementById("submit");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const token = JSON.parse(localStorage.getItem("token"));
const login_or_logout = document.getElementById("login");
if (token) {
  login_or_logout.innerText = "LOGOUT";
} else {
  login_or_logout.innerText = "LOGIN";
}
login_or_logout.addEventListener("click", () => {
  if (token) {
    localStorage.removeItem("token");
    login_or_logout.innerText = "LOGIN";
  }
});
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
        localStorage.setItem("token", JSON.stringify(Date.now()));
        login_or_logout.innerText = "LOGOUT";
        window.location.href = "./index.html";
      } else {
        document.getElementById("error").innerText = "Invalid credentials!";
      }
    });
});
