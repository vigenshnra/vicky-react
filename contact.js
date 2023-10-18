import React from "react";
import './contact.css';


const Contact = () =>{
return(
<section id="contact">
    <div className="contacts">
        <h1 className="contact-head">contact me</h1>
        <span className="contact-para">please fill out form below to discuss any work oppertunities</span>

        </div>

        <form>

        <div className="contact-info">
    
                        <div>
                    
                            <input type="text" id="firstname" placeholder=" your name" name="firstname"  onkeypress="lengthcheck()"/>
                           
                        </div>
                       
                        <div >
                        
                            <input type="text" id="email" placeholder=" your email" name="email"  onkeypress="lengthcheck()"/>
                            
                        </div>
                       
                        <div >
                    
                <textarea name="message" className="textarea" row="5">messages</textarea>
                </div>

                <div className="con-name">
                    <input type="button"className="button" value="send me"/>

                 </div>

                   

                </div>

                </form>

               
        

        
</section>




)

};
export default Contact;