import MusicItem from "./music-item";
import { initialSongs } from "./music";
import { useEffect, useState } from "react";


export default function MusicGrid(){

  const [mostLikedSongLikes, setMostLikedSongLikes] = useState(0);
  const [mostLikedSongName, setMostLikedSongName] = useState("");
  const [mostLikedSongArtist, setMostLikedSongArtist] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // fetch("/api/tunes").then(data => data.json()).then(response => setSongs(response));
    getSongs();
  }, [])

  const getSongs = async () => {
    const data = await fetch ("/api/tunes");
    const response = await data.json();
    setSongs(response);
  }

  const handleLike = (details) => {
    const {title, artist, likes}  = details;

    if(likes > mostLikedSongLikes) {
      setMostLikedSongName(title);
      setMostLikedSongArtist(artist);
      setMostLikedSongLikes(likes);
    }
  } 

  const handleSetTitle = (event) => {
    let title = event.target.value;
    setTitle(title);
  }

  const handleSetArtist = (event ) => {
    let artist = event.target.value;
    setArtist(artist);
  }

  const handleAddSong = () => {
    let song = {
      title: title,
      artist: artist
    }

    let newSongs = [...songs, song]
    setSongs(newSongs)
  }
  
  return(
    <div>
      <div className = "w-full grid grid-cols-3">
        {songs.map((song) => {
          return(
            <MusicItem
              title = {song.title}
              artist = {song.artist}
              onLike = {handleLike}
            ></MusicItem>
          )
        })}
      </div>

      <div className = "text-center mt-5">
        <p>Or you can add your own song by filling out the form below</p>
        <form className = "mt-5">
          <label className = "mr-3"></label>
          <input 
            className = "border border-purple-900 mr-1 px-3 py-1 rounded-md"
            value = {title}
            onChange = {handleSetTitle}
            placeholder="Title"
          />
          <label className = "mr-3 ml-2"></label>
          <input 
            className = "border border-purple-900 mr-1 px-3 py-1 rounded-md"
            value = {artist}
            onChange = {handleSetArtist}
            placeholder ="Artist"
          />
          <button
            className = "bg-purple-900 rounded-md px-3 py-1 text-white ml-3"
            type = "button"
            onClick = {handleAddSong}
          >
            Add song
          </button>
        </form>
      </div>
      
      <div className = "w-full mt-10 text-center">
        The most liked song is {mostLikedSongName} by {mostLikedSongArtist}
      </div>
    </div>
  )  
}


 












