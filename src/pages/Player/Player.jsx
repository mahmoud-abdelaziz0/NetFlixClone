import "./Player.css";

import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Player = () => {
   const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWNjOTQ3NDRlOGE1OTZiNzllMTU5NWNjYzU0ZDU3YyIsIm5iZiI6MTc1MDEzMDM1OC4zNjYwMDAyLCJzdWIiOiI2ODUwZGViNjcwYTUxMWE3NzBiYmQ1NzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.irLxhgljYzT5CqVnwzxRWd6ysf8P7h6iA5lcKNGP488",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  },[])


  return (
    <>
      <div className="player">
        <img src={back_arrow_icon} alt="" />
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameborder="0"
          allowFullScreen
          width="90%"
          height="90%"
          title="Trailer"
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    </>
  );
};

export default Player;
