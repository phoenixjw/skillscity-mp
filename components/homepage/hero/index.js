export default function Hero ({imgURL, name, subtitle}) {
    return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-col py-4 space-y-4 md:flex-row md:space-x-4">
        <div className="w-48">
        <img src={imgURL} className="rounded-lg"/> 
          
          
        </div>
        <div className="w-full text-center md:text-left">
        <h1 
            className = "font-bold text-6xl py-5 text-gray-700 "
        >
          {name}
        </h1>
        <p className="text-xl text-gray-700">{subtitle}</p>
        </div>

      </div>
    </div>







        
    )
}