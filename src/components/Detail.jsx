import React, {useEffect} from "react"
import NavBar from "./NavBar/NavBar"
import { getAllPublications, getPublicationById } from "../redux/actions"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"




const Detail = () => {

  const dispatch = useDispatch()

  const {idPublication} = useParams()

   useEffect(()=>{
      dispatch(getPublicationById(idPublication))
  },[idPublication])

  const detail = useSelector(state => state.detail)

    return(

        <div data-spy="scroll" data-target=".main-nav">

       
    
        <div className="about" >
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<p>{detail && detail.name ? detail.name : ''}</p>
					</div>
					<div className="row mb90">
						<div className="col-md-6">
							<p>{detail && detail.description ? detail.description : ''}</p>
						</div>
										<div className="col-md-4">
							<div className="st-member">
								<div className="st-member-img">
									<img src={detail.image} alt={detail.name}/>
								</div>
								
							</div>
						</div>


					</div>



					</div>

					<div className="row">
					
					

		

				</div>
			</div>
		</div>
	</div>

	
        </div>

       

  
        
    )
}

export default Detail
