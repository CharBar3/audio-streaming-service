import "./App.css";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer";
// import SeedData from "./seedData";
import mp3 from "./audio/falling-for-you.mp3";
import LeftNav from "./components/LeftNav/LeftNav";

function App() {
  const song = new Audio(mp3);

  return (
    <div className="App">
      <div>
        <LeftNav />
      </div>
      <MediaPlayer
        artistPicture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        artistName="SouMix & Bromer"
        songTitle="Falling For You"
        // audio={Audio}
        song={song}
      />
    </div>
  );
}

export default App;
