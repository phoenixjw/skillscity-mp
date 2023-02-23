import Input from "@/components/Forms/Input";
import NavigationBar from "@/components/nav-bar";
import LocationItem from "@/components/search/location-item";
import Content from "@/components/shared/Content";
import Header from "@/components/shared/Header";
import { useEffect, useState } from "react";

export default function Search() {
    const [locations, setLocations] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        const response = await fetch(`/api/locations`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();
        setLocations(data);
    }

    const filteredLocations = async (input) => {
        setInput(input);
        // if (!input) {
        //     getLocations();
        //     return;
        // }

        const response = await fetch(`/api/locations?search=${input}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();

        setLocations(data);
    }



    return (
         <div className="w-full">
            <div className="w-full max-w-6xl mx-auto">
            <NavigationBar></NavigationBar>
             <Header name="Search" />
             <Content>
                 <div className="w-full md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
                     <Input
                         value={input}
                         onChange={value => filteredLocations(value)}
                     />
                     <button
                         className="bg-blue-500 text-white px-6 py-2 rounded-md"
                         type="button"
                         onClick={filteredLocations}
                     >
                         Search
                     </button>
                 </div>

                 <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                     {locations.map(location => (
                         <LocationItem key={location.id} location={location} />
                     ))}                    
                 </div>

             </Content>
 
         </div>
         </div>
    )
}