import MusicItem from "./music-item";
import { initialSongs } from "./music";
import { useEffect, useState } from "react";
import { PrimsaClient } from "@prisma/client"


export default function MusicGrid() {
  const [tunes, setTunes] = useState([]);

  useEffect(() => {
      getTunes();
  }, []);

  const getTunes = async () => { 
      const response = await fetch(`/api/books`);
      const data = await response.json();
      setTunes(data);
  }

  return (
      <div className="w-full grid grid-cols-3 gap-4">
          {tunes.map((tune, index) => (
              <MusicItem key={index} tune={tune} />
          ))}
      </div>
  )
}

 












