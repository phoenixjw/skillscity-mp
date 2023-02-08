export default function Hero ({imgURL, name, subtitle}) {
    return (
    <div className="w-full max-w-6xl mx-auto">
    <div className="w-full flex flex-row space-x-2 ">
      <div className="w-3/12">
        <img img={imgURL} className="rounded-lg h-36"/> 
      </div>
      <div className="w-9/12">
      <h1 className = "text-center font-bold text-3xl py-5">{name}</h1>
      <p>{subtitle}</p>
      </div>   
    </div>
    </div>
        
    )
}