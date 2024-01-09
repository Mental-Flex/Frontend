import React from "react"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./NavBar/NavBar";



const Contact = () => {

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      const result = await emailjs.sendForm(
        'service_0xktgv9',
        'template_iaj1yd3',
        form.current,
        'bKkeZdeJY75nVnQm4'
      );
  
      console.log(result.text);
      form.current.reset();
      toast.success('Email sent successfully', {
        position: 'bottom-left',
      });
    } catch (error) {
      console.log(error.text);
      toast.error('Failed to send email', {
        position: 'bottom-left',
      });
    }
  };
  







    return(

        <div data-spy="scroll" data-target=".main-nav">

       
    
        <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title st-center">
              <h3>Contact Us</h3>
              <p>Get in Touch with Us</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">


          <form  className="contact-form"ref={form} onSubmit={sendEmail}>
      <label >Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-control" type="email" name="user_email"  />
      <label>Message</label>
      <textarea className="form-control" rows="10"  name="message" />
      <button className="btn btn-main btn-lg" type="submit" value="Send" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending..."><i class="fa fa-paper-plane "></i>
							Send</button>
    </form>



      
            <div id="result-message" role="alert"></div>
          </div>
          <div className="col-md-6">
            <p>
              Homines praetore aperiam aegritudine turpe quietus, amorem errore meo horreat triario quantus rectas tollitur.
              Infimum audiebamus saluto disciplina praetermittenda, aspernatur vocent firmitatem contenta eademque ibidem quales
              efficiat. Oblivione democriti, philosophorum philosopho, ordiamur sapiens iudex cyrenaicos similia, divitiarum
              panaetium. Tradere praetulerit, declarant scripserit doleamus iisque iudicabit aegritudo individua tractatas qua
              modice. Difficilius loqueretur improbe aetatis consectetur solis velint, grata quiddam partus occulta delectari
              maior, theseo eveniunt, turpius nesciunt amicitias constantia seque, utraque, statu genus scriptorem fugit fuissent
              duxit, compluribus primos scaevolam.
            </p>
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              795 Folsom Ave, Suite 600
              <br />
              San Francisco, CA 94107
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
      </div>
    </section>

        </div>
    

  
        
    )
}

export default Contact