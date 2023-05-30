const button = document.getElementById("clickable");
button.addEventListener("click", () => {
  const div = document.getElementById("showable");
  const Image = document.createElement("img");
  Image.src =
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=";
  div.append(Image);
});
const but1 = document.getElementById("but1");
const table = document.getElementById("tb");
but1.addEventListener("click", () => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = "Male";
  const td2 = document.createElement("td");
  td2.innerText = "Anurag";
  tr.append(td1);
  tr.append(td2);
  table.append(tr);
});
const but2 = document.getElementById("but2");
// const table1 = document.getElementById("tb");
but2.addEventListener("click", () => {
  //   const tr1 = document.getElementsByTagName("tr")[1];
  document.getElementsByTagName("tr")[1].remove();
});
