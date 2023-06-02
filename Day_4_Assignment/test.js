const token = JSON.parse(localStorage.getItem("token"));
const login_or_logout = document.getElementById("login");
if (token) {
  login_or_logout.innerText = "LOGOUT";
} else {
  login_or_logout.innerText = "LOGIN";
}
