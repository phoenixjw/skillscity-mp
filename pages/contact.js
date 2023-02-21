import Input from "@/components/Forms/Input";
import NavigationBar from "@/components/nav-bar";
import Content from "@/components/shared/Content";
import Header from "@/components/shared/Header";

import { useState } from "react";

export default function contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

  
    const handleChangeMessage = (event) => {
        const message = event.target.value;
        setMessage(message);
    }

    const handleSubmit = async (event) => {
        const response = await fetch(`/api/contact?name=${name}&email=${email}&message=${message}`);
        const data = await response.json();

        setName("");
        setEmail("");
        setMessage("");
        setShowSuccess(true);


    }


    return (
        <div className="w-full">
            <NavigationBar></NavigationBar>
            <Header name = "Contact"></Header>

            <Content>
                <form className="flex flex-col space-y-3">
                    <Input
                        placeholder = "Name"
                        value = {name}
                        onChange={(value) => setName(value)}
                    />

                    <Input
                        placeholder = "Email"
                        value = {email}
                        onChange= {(value) => setEmail(value)}
                    />

                    <textarea
                    placeholder="Message"
                    className="bg-gray-200 py-3 px-6 w-96" 
                    value={message}
                    onChange={handleChangeMessage}
                    />

                    <button
                    className="bg-blue-500 py-3 px-6 w-96 rounded text-white"
                    onClick={handleSubmit}
                    type="button"
                    >
                    Submit
                    </button>
                    
                    
                </form>

                {showSuccess === true ?
                (<p className="text-green-500 w-96">
                    Ayy! Your message was sent successfully.
                </p>)
                :
                null
                }



            </Content>


        </div>

    )
}