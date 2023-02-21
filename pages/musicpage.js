import NavigationBar from "@/components/nav-bar";
import MusicGrid from "@/components/music-grid";
import Header from "@/components/shared/Header";



export function MusicPage() {
    return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto">
      <NavigationBar></NavigationBar>

      <Header name="Music"></Header>
      <p className="py-2">Below are listed some of my favourite House and Garage tunes. Click on each one and follow the links on each page to either listen or make a purchase (subject to availability).</p>
      <MusicGrid></MusicGrid>
      </div>
      

    </div>
  
     
    )
  }
  
  export default MusicPage