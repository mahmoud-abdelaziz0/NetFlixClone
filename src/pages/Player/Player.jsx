import "./Player.css";

import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  return (
    <>
      <div className="player">
        <img src={back_arrow_icon} alt="" />
        <iframe
          src="https://www.youtube.com/embed/hkHHwA-vEyQ"
          frameborder="0"
          allowFullScreen
          width="90%"
          height="90%"
          title="Trailer"
        ></iframe>
        <div className="player-info">
          <p>Published Date</p>
          <p>Name</p>
          <p>Type</p>
        </div>
      </div>
    </>
  );
};

export default Player;
