import Navbar from "./components/Navbar.jsx";
import Card from "./components/card.jsx";
import "./components/card.css";
import { useState, useEffect } from "react";
function App() {
  const [str, setStr] = useState("");
  const [arr, setArr] = useState([]);
  const [msg, setMsg] = useState("Search your favourite movies");
  const handleChange = (e) => {
    setStr(e.target.value);
  };
  const handleSearch = async () => {
    if (str == "") {
      setMsg("Search your favourite movies");
    } else {
      await fetch(`http://www.omdbapi.com/?s=${str}&apikey=b9ba865b`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.Response == "False") {
            setMsg(data.Error);
          } else {
            console.log(data);
            console.log(data.Search);
            setMsg("");
            setArr(data.Search);
          }
        });
    }
  };
  useEffect(() => {
    handleSearch();
  }, [str]);

  return (
    <div>
      <Navbar />
      <div className="form">
        <input
          type="text"
          id="name"
          placeholder="Search your movies"
          value={str}
          onChange={(e) => handleChange(e)}
        />
        {/* <button className="search" onClick={handleSearch}>
          Search
        </button> */}
      </div>

      {msg ? (
        <div className="msg">{msg}</div>
      ) : (
        <div id="showmovies">
          {arr.map((ele) => {
            console.log(ele);
            return <Card title={ele.Title} image={ele.Poster} key={ele.id} />;
          })}
        </div>
      )}
    </div>
  );
}
export default App;
