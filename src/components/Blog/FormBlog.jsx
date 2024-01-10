import React, {useState, useEffect} from "react"
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPublication, getCategories } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'





const FormBlog = () => {


  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])


    const categories = useSelector(state => state.categories)


    const [category, setCategory] = useState([])


  const initialState = {
    name: "",
    description: "",
    image: "",
    publicationCategories: []
    
  };

  const [completed, setCompleted] = useState(initialState);
  const [create, setCreate] = useState(false);

  const form = useRef();



  const handleChange = (e) => {

      setCompleted({ ...completed, [e.target.name]: e.target.value });
    

  };


  const mapCategories = () => {
       
    return categories.map((d, i) => {
        const checked = category.includes(d.name);
       
      return (
        <div key={i}>
          <input
            type="checkbox"
            id={d.name}
            name={d.name}
            value={d.name}
            onChange={categoryHandler}
            checked={checked}
          
          />
          <label htmlFor={d.name}>{d.name}</label>
        </div>
      );
    });
  };


  const categoryHandler = (event) => {
    const categoryValue = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      
      setCategory([...category, categoryValue]);

      setCompleted({...completed, publicationCategories: [...category, categoryValue]})
  
     
    
    } else {
     
      const updatedCategory = category.filter((d) => d !== categoryValue);

      setCategory(updatedCategory);
  
      
      setCompleted({
        ... completed,
        publicationCategories: completed.publicationCategories.filter((d) => d !== categoryValue),
    })
    }
  };


  console.log(completed.publicationCategories)
  


  const submitHandler = async (e) => {
 
    e.preventDefault();
      const finalForm = {
      name: completed.name,
    
      description: completed.description,
     
      image: completed.image,


      publicationCategories: completed.publicationCategories
     
    };

    const formData = new FormData();


    formData.append("name", finalForm.name);
    formData.append("description", finalForm.description);
    formData.append("image", e.target.image.files[0]);
    finalForm.publicationCategories.forEach((category) =>
    formData.append("category", category)
  );

  
   console.log(formData)


    axios
    .post("http://localhost:3000/publications/", formData)
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
              <h3>Blog</h3>
              <p>Public your Blog</p>
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


      <div>


        <label  >Categories: </label>
      
          {mapCategories()}
      
        
        
            </div>




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

export default FormBlog