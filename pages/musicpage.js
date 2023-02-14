import NavigationBar from "@/components/nav-bar";
import MusicGrid from "@/components/music-grid";
import Hero from "@/components/homepage/hero";

export function MusicPage() {
    return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto">
      <NavigationBar></NavigationBar>

      <Hero name='Music'></Hero>
      <MusicGrid></MusicGrid>
      </div>
      

    </div>
  
     
    )
  }
  
  export default MusicPage