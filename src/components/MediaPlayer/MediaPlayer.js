import "./MediaPlayer.css";
import PauseIcon from "./icons/pause.svg";
import PlayIcon from "./icons/play.svg";
import VolumeIcon from "./icons/volume.svg";
import VolumeMaxIcon from "./icons/volume-2.svg";
import SkipBackIcon from "./icons/skip-back.svg";
import SkipForwardIcon from "./icons/skip-forward.svg";

const MediaPlayer = ({ artistPicture, songTitle, artistName }) => {
  return (
    <div className="media-player">
      <div className="media-player-song-info">
        <img src={artistPicture} alt="placeholder alt text" />
        <div className="media-player-song-title-artist-name">
          <span>{songTitle}</span>
          <a href="placeholder">{artistName}</a>
        </div>
      </div>
      <div className="media-player-controls">
        <div className="media-player-back-play-forward">
          <img src={SkipBackIcon} alt="skip-back-icon" />
          <img src={PlayIcon} alt="-icon" />
          <img src={SkipForwardIcon} alt="skip-forward-icon" />
        </div>
        <div className="media-player-time-slider">
          <input type="range" />
        </div>
        <div className="media-player-volume">
          <img src={VolumeMaxIcon} alt="Volume Icon" />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
