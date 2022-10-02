import "./App.css";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer";

function App() {
  return (
    <div className="App">
      <MediaPlayer
        artistPicture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        artistName="Artist Name"
        songTitle="Song Title"
      />
    </div>
  );
}

export default App;
