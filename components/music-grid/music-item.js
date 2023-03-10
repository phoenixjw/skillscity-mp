import {useState} from "react";
import Link from "next/link";

export default function MusicItem({tune}){
    const [likes, setLikes] = useState(+tune.likes);

    const handleLike = async () => {
        let newLikes = likes+1; 
        setLikes(newLikes);
    

    const id =+tune.id;
    const response = await fetch(`/api/increase-likes?id=${id}&likes=${newLikes}`);
    const data = response.json();

    }

return (
    <div className="border rounded-lg p-4">
        <img src={tune.img_url} className="rounded-lg w-40 h-40"></img>
        <Link href={`/singletune/${tune.id}`} className="text xl font-medium">
        {tune.title}
        </Link>
        <p className="text-gray-700">{tune.artist}</p>
        <button
            onClick={handleLike}
            type="button"
            className="bg-blue-500 px-2 py-1 rounded text-white mt-2"
        >
            Like ({likes} likes )
        </button>


    </div>

)
}