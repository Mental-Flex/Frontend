import React from "react"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";


const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0xktgv9', 'template_zh48eso', form.current, 'bKkeZdeJY75nVnQm4')
    .then(
      (result) => {
        console.log(result.text);
      },
      toast.success("Email send succesfully", {
        position: "bottom-left",
      }),
      (error) => {
        console.log(error.text);
      }
    );
  reset();
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
            <form className="contact-form" role="form" ref={form} onSubmit={sendEmail}>
              <input type="text" className="form-control" id="sendername" name="sendername" placeholder="Your Full Name"
              {...register("user_name", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be atleast 3 charracters long",
                },
              })} />
               <p className="contact-form "> {errors.user_name?.message}</p>
              <input type="email" className="form-control" id="email" name="user_email" placeholder="Your E-mail"
               {...register("user_email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email must be valid",
                },
              })} />
              <p className="contact-form ">{errors.user_email?.message}</p>
              <textarea id="message" name="message" placeholder="Your Message" className="form-control" rows="10"
              {...register("Message", {
                required: "Message is required",
                minLength: {     
                  value: 15,
                  message: "Message must be atleast 15 charracters long",
                },
                maxLength: {
                  value: 150,
                  message: "Message must be less than 150 charracters",
                },
              })} />
              <p className="contact-form"> {errors.Message?.message}</p>
              <button className="btn btn-main btn-lg" type="submit" value="send" data-loading-text="<i className='fa fa-spinner fa-spin'></i> Sending...">
                <i className="fa fa-paper-plane "></i>
                Send
              </button>
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