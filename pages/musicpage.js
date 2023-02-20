import NavigationBar from "@/components/nav-bar";
import MusicGrid from "@/components/music-grid";
import Header from "@/components/shared/Header";



export function MusicPage() {
    return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto">
      <NavigationBar></NavigationBar>

      <Header name="Music"></Header>
      <MusicGrid></MusicGrid>
      </div>
      

    </div>
  
     
    )
  }
  
  export default MusicPage