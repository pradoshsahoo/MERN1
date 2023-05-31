const data = [
  {
    image:
      "https://mariasindiankitchen.com/wp-content/uploads/2023/01/chicken-biriyani-3.jpg",
    title: "Biriyani",
    rating: 5,
    desc: "Spicy flavourful chicken dum cooked with layers of aromatic basmati rice, caramelised onion.",
  },
  {
    image: "https://static.toiimg.com/thumb/53094926.cms?width=1200&height=900",
    title: "Chilli Chicken",
    rating: 4,
    desc: "Chilli chicken is a sweet, spicy & slightly sour crispy appetizer made with chicken, bell peppers, garlic, chilli sauce & soya sauce.",
  },
  {
    image:
      "https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-04.jpg",
    title: "Paneer Tikka",
    rating: 5,
    desc: "Paneer Tikka is a North Indian appetizer where chunks of paneer are marinated in spiced yogurt and grilled in a Tandoor, a traditional clay oven.",
  },
  {
    image: "https://static.toiimg.com/photo/75490988.cms",
    title: "Paneer 65",
    rating: 5,
    desc: "Paneer 65 is a spicy South Indian appetizer made with Paneer aka Indian cheese, flour, spices and herbs like curry leaves.",
  },
  {
    image:
      "https://overthefirecooking.com/wp-content/uploads/2022/10/A_IMG_5877-2.jpg",
    title: "Chicken Lollipop",
    rating: 5,
    desc: "Chicken lollipop is a popular Indo-Chinese appetizer where a frenched chicken drumette is marinated",
  },
];

const movieBox = document.getElementById("showmovies");
data.map((el) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = el.image;
  const movieTitle = document.createElement("h3");
  movieTitle.innerText = el.title;
  const movieRating = document.createElement("p");
  movieRating.id = "rate";
  movieRating.innerText = `${el.rating}/5`;
  const p1 = document.createElement("p");
  p1.innerText = el.desc;
  p1.id = "pdesc";
  const button1 = document.createElement("button");
  button1.innerText = "MORE";
  const button2 = document.createElement("button");
  button2.innerText = "LESS";
  button1.addEventListener("click", () => {
    p1.style.display = "block";
  });
  button2.addEventListener("click", () => {
    p1.style.display = "none";
  });
  div.append(image, movieTitle, movieRating, button1, button2, p1);
  movieBox.append(div);
});
