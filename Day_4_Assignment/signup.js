const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email != "" && password != "") {
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
    })
      .then((response) => {
        if (response.ok) {
          alert("User created successfully");
          return response.json();
        } else {
          alert("Something went wrong");
        }
      })
      .then((data) => {
        window.location.href = "./login.html";
      });
  } else {
    document.getElementById("error").innerText = "Fill all the fields";
  }
});
