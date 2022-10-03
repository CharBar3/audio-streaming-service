import "./VolumeModal.css";

const VolumeModal = ({ song, style }) => {
  const handleChange = (e) => {
    song.volume = e.target.value / 100;
  };

  return (
    <div className="volume-modal" style={style}>
      <input type="range" min="0" max="100" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default VolumeModal;
