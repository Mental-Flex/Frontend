import React from "react"


const Funfacts = () => {

    return(

        <div data-spy="scroll" data-target=".main-nav">

       
    
        <section className="funfacts" data-stellar-background-ratio="0.4">
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-briefcase"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="25964"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">Projects</strong>
					</div>
				</div>
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-clock-o"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="35469"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">Hours Work</strong>
					</div>
				</div>
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-send"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="86214"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">E-mail</strong>
					</div>
				</div>
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-magic"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="3647"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">Completed</strong>
					</div>
				</div>
			</div>
		</div>
	</section>

        </div>
    

  
        
    )
}

export default Funfacts