import NavigationItem from "./nav-item"
import Image from "next/image"
export default function NavigationBar () {
    return (
        <div  className=" w-full bg-gray-900 text-white flex flex-cols navbar navbar-expand-lg navbar-light py-1"  >
            {/* <div className='Logo right-0'>
            <Image src='/cartman1.jpg' width={100} height={70} ></Image>
            </div> */}
            <NavigationItem ahref="/" name = "Home"></NavigationItem>
            <NavigationItem ahref="/musicpage" name = "Music"></NavigationItem>
            <NavigationItem ahref="/single-book" name = "Book"></NavigationItem>
            <NavigationItem ahref="/search" name = "Search"></NavigationItem>
            <NavigationItem ahref="/contact" name = "Contact">name = "Contact"</NavigationItem>

        </div>
    )
    
}