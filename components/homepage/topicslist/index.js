import  topics  from "./topic";
export default function Topics(){
    return (
        <div className="w-full flex flex-col"> 
        <h3 className="font-bold text-2xl">Topic covered in this course:</h3>
        <div>
        <ul className="list-disc">
            {topics.map((topic, index) => {
                return <li key={index}>{topic}</li>
            })}


        </ul>
        </div>
        </div>

    )
}