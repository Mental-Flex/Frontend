import React from "react"


const Services = () => {

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
    
        <section className="service" id="service">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>What we do</h3>
						<p>Avocent deditum long</p>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-coffee"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
								
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-heart"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-graduation-cap"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-home"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

        </div>
    

  
        
    )
}

export default Services