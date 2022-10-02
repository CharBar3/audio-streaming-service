import "./App.css";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer";
// import SeedData from "./seedData";
import mp3 from "./audio/falling-for-you.mp3";

function App() {
  // const song = new Audio(mp3);
  return (
    <div className="App">
      <MediaPlayer
        artistPicture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        artistName="SouMix & Bromer"
        songTitle="Falling For You"
        // audio={Audio}
        song={new Audio(mp3)}
      />
    </div>
  );
}

export default App;
