import NavigationBar from "@/components/nav-bar"
import Hero from "@/components/homepage/hero"
import Bio from "@/components/homepage/bio"
import Topic from "@/components/topic"
import Image from "next/image";
import { Router, useRouter } from "next/router";


export function Home() {
  const router = useRouter()

  const handleClick = () => {
    alert("You clicked the button");

    router.push("/musicpage")
  }
  return (
  <div className="w-full">
  <div className="w-full max-w-6xl mx-auto">
    <NavigationBar></NavigationBar>
    <Hero name = "Phoenix Warburton - Mini Project"></Hero>
    <Bio></Bio>
    <Topic></Topic>
    <br></br>

    <button 
    className="items-center bg-blue-500"
    onClick={handleClick}
    >
      Click Me!
    </button>
  </div>
  </div>

   
  )
}

export default Home