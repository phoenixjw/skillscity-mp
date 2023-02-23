import NavigationBar from "@/components/nav-bar";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Hero from "@/components/homepage/hero";
import Footer from "@/components/shared/Footer";
import Content from "@/components/shared/Content";
import YouTube from "react-youtube";



export default function SingleTune() {
    const router = useRouter();
    const [tune,setTunes] = useState(null);
    const {tuneid} = router.query;
    console.log("router ds",tuneid)

    useEffect(() => {
        if(!tuneid) return;

        getTune(tuneid)
    }, [tuneid])
    // Dependancy array included here, so that when when value of tune id changes, Next.js knows to fetch new data from api.

  const getTune = async (id) => {
      const response = await fetch(`/api/tunes-by-id?id=${id}`);
      const data = await response.json();
      const {tune} = data;
      setTunes(tune);
  }

  
  console.log(tune)
  
  if(!tune){
    return (
        <div>Loading...</div>    
    )
  }
  

  return(
        <div className=" w-full max-w-6xl mx-auto"> 
            <NavigationBar></NavigationBar>
            <Hero
                imgURL={tune.img_url}
                name = {tune.title}
                subtitle = {tune.artist}
            />
            
            <div className="flex flex-row mr-2 text-blue-500 sm: flex items-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <a href={tune.link_to_purchase} target="_blank" className="text-blue-500">
                Click here to Purhase
            </a>

            </div>


            <Content>
            <div className="border flex flex-col p-2 bg-gray-200 rounded-lg">
                    <YouTube videoId={tune.yt_link} className=" mx-auto flex justify-center w-44 h-42 " />
                <div className="mx-auto flex flex-row text-center mx-4">
                    <Footer
                        title="<< Previous Tune"
                        href={`/singletune/${parseInt(tune.id) - 1}`}
                    />
                    <Footer
                        title="Next Tune >>"
                        href={`/singletune/${parseInt(tune.id) + 1}`}
                     />
                </div>
            </div>
            </Content>
        </div>
    )
}