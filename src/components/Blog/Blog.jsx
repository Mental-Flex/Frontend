import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { filterByCategory, getAllPublications, getCategories } from "../../redux/actions"
import CardsContainer from "../Blog/CardsContainer"
import { useEffect, useState} from "react"
import NavBar from "../NavBar"


const Blog = () => {

    // voy a preguntar si esta autenticado y si hay user y si si voy a llamar a getuser del backend para que me traiga
    //  el usuario role y si role es admin voy a poner un boton (en un side bar) que me lleve a un formulario para publicar blog, luego voy
    //   a hacer el detalle de cada blog

	const [selectedFilter, setSelectedFilter] = useState('All');
	const [originalPublications, setOriginalPublications] = useState([]);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
	
  };

	const dispatch = useDispatch()
    const publications = useSelector(state => state.publications)
	const categories = useSelector(state => state.categories)
	const filtered = useSelector(state => state.filtered)

	
    

     useEffect(()=>{
        dispatch(getAllPublications())
    },[dispatch])

	useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])

	

	const filter = (event) => {

       
        const value = event.target.value

		handleFilterChange(value);
       
            dispatch(filterByCategory(value))
        
       
    }

	

  

	

    return(

        <div data-spy="scroll" data-target=".main-nav">

     
    
        <section className="portfolio" id="portfolio">
		<div className="container-fluid ">
			<div className="row">
				<div className="col-md-12 no-padding ">
					<div className="section-title st-center">
						<h3>What we have done</h3>
						<p>Avocent deditum long</p>
					</div>




					 <div className="filter mb40">
						<form id="filter">
							<fieldset className="group" name="category" onClick={(e) => filter(e)} >
							<label className="btn btn-default"><input type="radio" name="filter" value="All"/>All</label>

								{categories?.map((c) => {
            return (
             

			  <label className="btn btn-default"><input type="radio" name="filter" value={c.name}/>{c.name}</label>
            );
          })}

          
								
								
							</fieldset>
						</form>
					</div>

					

				
        

                   
					<CardsContainer publications={filtered.length == 0? publications : filtered} />



				

				</div>
			</div>
		</div>
	</section>


	

        </div>
    

  
        
    )
}

export default Blog