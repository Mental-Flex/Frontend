import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByCategory, getAllPublications, getCategories } from "../../redux/actions"
import CardsContainer from "../Blog/CardsContainer"
import { useEffect} from "react"


const Blog = () => {

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
       
            dispatch(filterByCategory(value))
        
       
    }

	console.log(filtered)

    

	

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

				
        

                   
					<CardsContainer publications={filtered} />



				

				</div>
			</div>
		</div>
	</section>


	

        </div>
    

  
        
    )
}

export default Blog