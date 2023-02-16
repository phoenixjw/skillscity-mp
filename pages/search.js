import Input from "@/components/Forms/input"
import NavigationBar from "@/components/nav-bar"
import { Content } from "@/components/shared/Content"

export function search() {
    return(
        <div className="w-full">
                <NavigationBar></NavigationBar>
                {/* <p> Add header component</p>   */}

                <Content>
                    <div className=" w-full md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
                        <Input/>
                        <button
                            className="bg-blue-500 text-white px-3 py-2 rounded-md"
                            type="button"
                        ></button>
                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                        <div className="w-full h-40 bg-red-100"></div>


                    </div>
                </Content>
        </div>
    )
    
}
export default search