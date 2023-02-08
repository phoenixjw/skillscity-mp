import NavigationBar from "@/components/nav-bar"
import Hero from "@/components/homepage/hero"
import Bio from "@/components/homepage/bio"
import Topic from "@/components/topic"
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { Content } from "@/components/shared/Content";
import Topics from "@/components/homepage/topicslist";


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
    <Hero name = "Phoenix Warburton - Mini Project" imgURL="/phoenixProP.jpg" subtitle="I am a bootcamp learner."></Hero>
    <Bio></Bio>
    <Content>
      <Topics></Topics>

    </Content>
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