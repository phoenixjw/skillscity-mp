import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function ContactForm(){
  const {register, handleSubmit, errors, reset} =  useForm();
  const router = useRouter()
  async function onSubmitForm(values) {
    // console.log(values)
    let config ={
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try{
      const response = await axios(config);
      if (response.status ==200) {
        console.log('Success');
        reset()
        router.push('/');
      };

    } catch(err){
      console.error(err);
    }

  }
 
    return(
 
<div className=" flex items center"> 
<form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={handleSubmit(onSubmitForm)}>

  <div className = "mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
  <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
  id ="name" type="text" 

  {...register("message", {
    required: "Required",


  })}
      />
  <span className="text-red-400 text-sm py-2">{errors?.name?.message}</span>
  </div>


  <div className = "mb-4"> 
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
  <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
  type="email" id="email" name="email" 
  {...register("message", {
    required: "Required",
  
  minLength: {
    value: 8,
    message: 'This is not long enough to be an email address',
  },
  maxLength: {
    value: 120,
    message: 'This is too long for an email address',

  },
  pattern: {
    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
    message: "invalid email address"
  },

})}   

  />
   <span className="text-red-400 text-sm py-2">{errors?.email?.message}</span>
  </div>   

  <div className = "mb-4 xl:w-96"> 
  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2" >Message:</label>
  <textarea className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " 
  id="enquiry" name="message" rows="3" placeholder="Your message" 
  {...register("message", {
    required: "Required",
 
    maxLength: {
      value: 1000,
      message: "Your message can't be more than 1000 characters"
    },
    minLength: {
      value: 20,
      message: 'Your message must be longer than this!',
  
    },
   }) }  

  />
  <span className="text-red-400 text-sm py-2">{errors?.message?.message}</span>
  </div>

  <div className="items-center justify-items-center" >
  <button className=" items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Submit</button>
  </div>

</form>
</div>




    )
}