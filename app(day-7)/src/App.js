import Navbar from "./components/Navbar.jsx";
import Card from "./components/card.jsx";
import "./components/card.css";
function App() {
  const data = [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
      title: "Harry Potter",
      rating: 5,
      desc: " films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title: "Stranger things",
      rating: 4.6,
      desc: " films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BNzk5ODM0OTQ0N15BMl5BanBnXkFtZTcwODg2ODE4OA@@._V1_.jpg",
      title: "G.I. JOE",
      rating: 5,
      desc: " films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore",
    },
    {
      image:
        "https://i.gadgets360cdn.com/large/Spider-Man_FFH_Poster_2_1561455611746.jpg",
      title: "Spiderman",
      rating: 5,
      desc: " films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
      title: "Iron Man",
      rating: 5,
      desc: " films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div id="showmovies">
        {data.map((el) => {
          return <Card title={el.title} image={el.image} rating={el.rating} />;
        })}
      </div>
    </div>
  );
}

export default App;
