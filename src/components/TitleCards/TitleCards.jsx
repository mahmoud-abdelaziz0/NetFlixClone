import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWNjOTQ3NDRlOGE1OTZiNzllMTU5NWNjYzU0ZDU3YyIsIm5iZiI6MTc1MDEzMDM1OC4zNjYwMDAyLCJzdWIiOiI2ODUwZGViNjcwYTUxMWE3NzBiYmQ1NzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.irLxhgljYzT5CqVnwzxRWd6ysf8P7h6iA5lcKNGP488",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
    `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .then((res) => setApiData(res.results))
    .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  console.log(apiData)

  return (
    <>
      <div className="title-cards">
        <h2>{title ? title : "Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData?.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
                <p>{card.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TitleCards;
