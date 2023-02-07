import Hero from "@/components/homepage/hero"
import NavigationBar from "@/components/nav-bar"
import ContactForm from "@/components/contact"

export function Contact() {
    return (
      <div className="w-full">
      <div className="w-full max-w-6xl mx-auto">
      <NavigationBar></NavigationBar>
      <Hero name = 'Contact Me'></Hero>
      <ContactForm></ContactForm>
 
      
    </div>
    </div>
  
     
    )
  }
  
  export default Contact