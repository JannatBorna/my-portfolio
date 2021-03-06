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
        <section id="contact">
            <div className="contact_section">
                <div className="contact">
                    <h2 className="contact_type mt-5">CONTACT ME</h2>
                    <form onSubmit={sendEmail}>
                        <input className="bg-white mt-5" {...register("name", { required: true, maxLength: 25 })} placeholder="Enter Name" />
                        <input className="my-2 bg-white" {...register("user_email")} placeholder="Email" />
                        <textarea className="my-3 bg-white" {...register("message")} row="4" placeholder="Message" />

                        <input className="btn btn-secondary my-2 w-50 send_button" type="submit" value="S E N D" />
                    </form>



                    <footer className="my-5">
                        <small className="footer_text">Copyright &copy; 2021 | Jannat Borna</small>
                        <br />
                        <span className="text-white my-5">Dhaka, Bangladesh</span>


                        <div className="contact_link text-sm-middle">
                            <a href="https://github.com/JannatBorna" className="m-2"><i className="fab fa-github fs-6"></i></a>

                            <a href="https://www.linkedin.com/in/dilruba-jannat-borna-09147b216/" className="mx-2"><i className="fab fa-linkedin fs-6"></i></a>

                            <a href="https://www.instagram.com/borna_jannat/" className="mx-2"><i class="fab fa-instagram fs-6"></i></a>

                            <a href="https://www.facebook.com/Bornabaset" className="mx-2"><i className="fab fa-facebook-square fs-6"></i></a>

                            <a href="https://twitter.com/" className="mx-2"><i className="fab fa-twitter fs-6"></i></a>
                        </div>

                        
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;



                

        