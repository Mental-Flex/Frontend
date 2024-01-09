import React from "react"
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPublication } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux"




const FormBlog = () => {

  const dispatch = useDispatch()

  const form = useRef();

  const submitHandler = async (event) => {
    event.preventDefault()



          
        console.log(form)
         const  response = await dispatch(createPublication(form));

          if(response){
          toast.success('Create Publication', {
            position: 'bottom-left',
          })
        }


       
        
}

 
    return(

        <div data-spy="scroll" data-target=".main-nav">

       
    
        <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title st-center">
              <h3>Blog</h3>
              <p>Public your Blog</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">


          <form  className="contact-form"ref={form}  onSubmit={submitHandler}>
      <label >Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Category</label>
      <input className="form-control" type="text" name="user_email"  />
      <label>Description</label>
      <textarea className="form-control" rows="10"  name="message" />
    

<label >Image</label>
      <input className="form-control" 
              placeholder="Url..."
              type="file"
              id="image"
              name="image"
            />




      <button className="btn btn-main btn-lg" type="submit" value="Send" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending..."><i class="fa fa-paper-plane "></i>
							Public</button>

              
    </form>



      
            <div id="result-message" role="alert"></div>
          </div>
         
        </div>
      </div>
    </section>

        </div>
    

  
        
    )
}

export default FormBlog