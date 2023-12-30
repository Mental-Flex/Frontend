import React from "react"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

        <header className="st-navbar">
            <nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation">
                <div className="container">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sept-main-nav">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img src="assets/photos/logo3.png" alt="" className="img-responsive"/></a>
                    </div>
    
                    
                    <div className="collapse navbar-collapse main-nav" id="sept-main-nav">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#portfolio">Blog</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    
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
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
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