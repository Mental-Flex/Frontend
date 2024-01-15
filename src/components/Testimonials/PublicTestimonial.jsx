import React, {useState, useEffect} from "react"
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPublication, getCategories, getTestimonials } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'





const PublicTestimonial = () => {


  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTestimonials())
    },[dispatch])


    const testimonials = useSelector(state => state.testimonials)




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

    const formData = new FormData();


    formData.append("name", finalForm.name);
    formData.append("description", finalForm.description);
    formData.append("instagram", finalForm.instagram)
    formData.append("link", finalForm.link)
    formData.append("image", e.target.image.files[0]);
    
   
  

  
   console.log(formData)


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


    
          
          

       
        
}

 
    return(

        <div data-spy="scroll" data-target=".main-nav">

       
    
        <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title st-center">
              <h3>Testimonial</h3>
              <p>Public your Testimonial</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">


<form  className="contact-form"ref={form}  onSubmit={submitHandler}>
      <label >Name</label>
      <input className="form-control" type="text" name="name" value={completed.name} onChange={handleChange} />
      <label>Description</label>
      <textarea className="form-control" rows="10"  name="description" value={completed.description} onChange={handleChange} />
      <label >Social account (optional) </label>
      <input className="form-control" type="text" name="instagram" value={completed.instagram} onChange={handleChange} />
      <label >Link (optional)</label>
      <input className="form-control" type="text" name="link" value={completed.link} onChange={handleChange} />


      <label >Image</label>
      <input className="form-control"  type="file" id="image" name="image" value={completed.image} onChange={handleChange} />
      <button className="btn btn-main btn-lg" type="submit" value="Send" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending..."><i class="fa fa-paper-plane "></i>
			        Public</button>

              
</form>


          </div>
         
        </div>
      </div>
    </section>

        </div>
    

  
        
    )
}

export default PublicTestimonial