import NavigationBar from "@/components/nav-bar";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Hero from "@/components/homepage/hero";
import Footer from "@/components/shared/Footer";
import Content from "@/components/shared/Content";



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
//   console.log(tune.title)
  
  if(!tune){
    return (
        <div>Loader</div>    
    )
  }
  

  return(
        <div className="w-full max-w-6xl mx-auto"> 
            <NavigationBar></NavigationBar>
            <Hero
                imgURL={tune.img_url}
                name = {tune.title}
                subtitle = {tune.artist}
            />
            <Content>
                <div className="w-full flex flex-col"></div>
                     <a href={tune.link_to_purchase} target="_blank" className="w-full">
                        Click here to purchase
                     </a>
            </Content>

            <Footer
                title="Next Tune"
                href={`/singletune/${parseInt(tune.id) + 1}`}
            />
        </div>
    )
}