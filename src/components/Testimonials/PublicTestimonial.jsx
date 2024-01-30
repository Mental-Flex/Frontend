import React, {useState, useEffect} from "react"
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPublication, getCategories, getTestimonials } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { validate } from "./validations";
import {useTranslation} from 'react-i18next'





const PublicTestimonial = () => {

  const [t, i18n] = useTranslation("global")



  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTestimonials())
    },[dispatch])


    const testimonials = useSelector(state => state.testimonials)
    const [errors, setErrors] = useState({ form: "complete form" });




  const initialState = {
    name: "",
    description: "",
    instagram: "",
    link: "",
    image: "",
    
    
  };

  const [completed, setCompleted] = useState(initialState);
  const [create, setCreate] = useState(false);

  const form = useRef();



  const handleChange = (e) => {

      setCompleted({ ...completed, [e.target.name]: e.target.value });

      const validationErrors = validate({
        ...completed,
        [e.target.name]: e.target.value,
      });
      setErrors({ ...errors, [e.target.name]: validationErrors[e.target.name] });
    

  };


  
  


  const submitHandler = async (e) => {
 
    e.preventDefault();
      const finalForm = {
      name: completed.name,
    
      description: completed.description,

      instagram: completed.instagram,

      link: completed.link,
     
      image: completed.image,



     
    };


    const validationErrors = validate(finalForm);

    
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();


    formData.append("name", finalForm.name);
    formData.append("description", finalForm.description);
    formData.append("instagram", finalForm.instagram)
    formData.append("link", finalForm.link)
    formData.append("image", e.target.image.files[0]);

    axios
    .post("http://localhost:3000/testimonials/", formData)
    .then(() => {
      setCreate(!create);
      setCompleted(initialState);

      toast.success('Create Publication', {
        position: 'bottom-left',
      })
      
    })
    .catch((error) => {
      console.log(error);
    });


    } else {
      setErrors(validationErrors);
    }
    
      
}

 
    return(

        <div data-spy="scroll" data-target=".main-nav">


<nav className='navbar' >
          <ul >

            <li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer' }}>ES</a></li>
            <li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer' }}>EN </a></li>
           
          </ul>
        </nav>

       
    
        <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title st-center">
              <h3>{t("publicTestimonial.testimonial1")}</h3>
              <p>{t("publicTestimonial.testimonial2")}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">


<form  className="contact-form"ref={form}  onSubmit={submitHandler}>
      <label >{t("publicTestimonial.name")}</label>
      <input className="form-control" type="text" name="name" value={completed.name} onChange={handleChange} />
      <label>{t("publicTestimonial.description")}</label>
      <textarea className="form-control" rows="10"  name="description" value={completed.description} onChange={handleChange} />
      <label >{t("publicTestimonial.social")}  ({t("publicTestimonial.optional")}) </label>
      <input className="form-control" type="text" name="instagram" value={completed.instagram} onChange={handleChange} />
      <label >Link ({t("publicTestimonial.optional")}) </label>
      <input className="form-control" type="text" name="link" value={completed.link} onChange={handleChange} />


      <label >{t("publicTestimonial.image")} </label>
      <input className="form-control"  type="file" id="image" name="image" value={completed.image} onChange={handleChange} />
      {errors.image ? (
              <p style={{color: 'red'}}>{errors.image}</p>
            ) : null}
      <button className="btn btn-main btn-lg" type="submit" value="Send" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending..."><i class="fa fa-paper-plane "></i>
      {t("publicTestimonial.public")} </button>

              
</form>


          </div>
         
        </div>
      </div>
    </section>

        </div>
    

  
        
    )
}

export default PublicTestimonial