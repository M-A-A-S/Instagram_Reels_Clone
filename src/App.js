import { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  // BEM naming convention
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://scontent.fkrt3-2.fna.fbcdn.net/v/t39.8562-6/313408032_676073764084474_9080563414774037997_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6825c5&_nc_ohc=BOvsG3djThYAX8cOcy5&_nc_ht=scontent.fkrt3-2.fna&oh=00_AfAfOg4NJOveyfNrCKVKP7_8h8uOntfbX_FQ3GTXpUDZSA&oe=637B2F26"
          alt=""
        ></img>
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            key={channel}
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
