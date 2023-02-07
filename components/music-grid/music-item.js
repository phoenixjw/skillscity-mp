import {useState} from "react";

export default function MusicItem({title, artist, onLike}){
  const [likes, setLikes] = useState(0)

  const handleIncrementLike = () => {
    let newValue = likes + 1;
    let details = {
      title: title,
      artist: artist,
      likes: newValue
    }
    
    onLike(details);
    
    setLikes(newValue);
  }
  
  return(
    <div>
      <div className = "grid grid-rows w-full text-center bg-gray-100 py-1 px-3">
        <p className = "text-l font-medium mb-1 pt-5">{title}</p>
        <p className = "text-s italic mb-5">{artist}</p>
        <p className = "text-center text-gray-800 font-bold">{likes} likes</p>
        <button 
          className = "bg-gray-900 text-white px-3 py-1"
          onClick={handleIncrementLike}
          
        >Like</button>
      </div>
    </div>
  )
}