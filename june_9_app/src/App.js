import Navbar from "./components/Navbar.jsx";
import Card from "./components/card.jsx";
import "./components/card.css";
import { useState, useEffect } from "react";
function App() {
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(1);
  const [wholeArr, setWholeArr] = useState([]);
  let pageArr = [];
  let i = 1;
  while (i <= wholeArr.length / 10) {
    pageArr.push(i);
    i++;
  }
  const handleChange = (ele) => {
    console.log(ele);
    setPage(ele);
  };
  // const handleSearch = async () => {
  //   await fetch(
  //     `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArr(data.data);
  //     });
  // };
  // useEffect(() => {
  //   handleSearch();
  // }, [page]);

  const handleSearch = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setWholeArr(data);
        const end = page * 10;
        const start = (page - 1) * 10;
        const new_arr = data.slice(start, end);
        setArr(new_arr);
      });
  };
  useEffect(() => {
    handleSearch();
  }, [page]);

  return (
    <div>
      <Navbar />
      {pageArr.map((ele) => {
        return <button onClick={(e) => handleChange(ele)}>{ele}</button>;
      })}
      <div id="showmovies">
        {arr.map((ele, id) => {
          return <Card title={ele.id} country={ele.title} key={id} />;
        })}
      </div>
    </div>
  );
}
export default App;
