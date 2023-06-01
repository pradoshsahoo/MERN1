// import fetch  from "node-fetch";
fetch("http://localhost:5501/data", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => renderData(data));
function renderData(data) {
  console.log(data);
}
