import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {
    const { register} = useForm();

    const sendEmail = (e) => {
        e.preventDefault();
          
        emailjs.sendForm('service_ndxrcsf', 'template_975njce', e.target,'user_9PtveqoupTZwi34BaHAaL' )
        .then(res=> {
           alert('Your Message Send Successfully')

        })
        .catch(err =>console.log(err));
    }


    return (
        <div>
            <div className="contact">
                <h2 className="contact_type mt-5">Contact Me</h2>
                <form onSubmit={sendEmail}>
                    <input className="bg-white mt-5" {...register("name", { required: true, maxLength: 25 })} placeholder="Enter Name" />
                    <input className="my-2 bg-white" {...register("user_email")} placeholder="Email" />
                    <textarea className="my-3 bg-white" {...register("message")} row="4" placeholder="Message" />
                    
                    <input className="btn btn-secondary  my-2 w-25 bg-white text-black" type="submit" value="S E N D" />
                </form>
                 
                
       
            <footer className="my-5">
                        <small className="footer_text">Copyright &copy; 2021 | Jannat Borna</small>
                          <br />
                        <span className="text-white my-5">Dhaka, Bangladesh</span>
        
         
              <div className="all_link text-sm-middle">
                        <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                        <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-3"><i className="fab fa-linkedin fs-6"></i></a>

                        <a href="https://www.instagram.com/borna_jannat/" className="mx-3"><i class="fab fa-instagram fs-6"></i></a>

                        <a href="https://www.facebook.com/Bornabaset" className="mx-3"><i className="fab fa-facebook-square fs-6"></i></a>

                        <a href="https://twitter.com/" className="mx-3"><i className="fab fa-twitter fs-6"></i></a>
               
                
                </div>
             </footer>
            </div>

          </div>
        
    );
};

export default Contact;


        