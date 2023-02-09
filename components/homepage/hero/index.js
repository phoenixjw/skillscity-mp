export default function Hero ({imgURL, name, subtitle}) {
    return (
    <div className="w-full max-w-6xl mx-auto">
    <div className="w-full flex flex-row space-x-2 ">
      <div className="w-3/12">
        <img src={imgURL} className=" mt-5 mb-5 rounded-lg h-36 w-28"/> 
      </div>
      <div className="w-9/12">
      <h1 className = "font-bold text-4xl py-5">{name}</h1>
      <p className="text-xl text-gray-700">{subtitle}</p>
      </div>   
    </div>
    </div>
        
    )
}