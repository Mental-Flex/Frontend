import { useEffect } from 'react';
import React from "react"
import 'jquery';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';






const Testimonials = () => {


	
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






		
    
        <section className="testimonials">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="testimonials-carousel">


						<ul className="owl-carousel owl-theme" style={{display: 'block',
		opacity: 1}}>



							<div className="owl-wrapper-outer">


								
								<div className="owl-wrapper owl-origin" style={{display: 'block',
		                          width: '4800px',
		                          left: '0px',
		                          transition: 'all 0ms ease 0s',
		                          transform: 'translate3d(-800px, 0px, 0px)',
		                          transformOrigin: '1200px center',
		                          perspectiveOrigin: '1200px center'}}>
			
			<div className="owl-item owl-backSlide-out" style={{width: '800px',
		position: 'relative',
		left: '800px'}}>
			
			<li>
								<div className="testimonial">
									<div className="testimonial-img">
										<img src="assets/photos/client.jpg" alt=""/>
									</div>


									<blockquote>
										<p>Tueri tantis inter variis deterritum facta caret pleniorem, efficiat affert quiete, commodis
											comparat facio ponti, adolescens recta iucundius mundi nostrum viris quae utilitatibus.</p>
										<footer>Joseph Thompson, <cite title="Source Title">Example Inc.</cite></footer>
									</blockquote>


								</div>


							</li>
							
							</div>
							
							<div className="owl-item owl-backSlide-in" style={{width: 800}}>
								
								<li>
								<div className="testimonial">
									<div className="testimonial-img"> 
										<img src="assets/photos/client2.jpg" alt=""/>
									</div>


									<blockquote>
										<p>Contrariis labore vetuit scaevola, contra percurri adamare efficeret quibus. Nostram consulatu
											mediocritatem maiorem, cyrenaicisque, quandam accedit veniat cognitioque, animadvertat
											accusantibus temporibus maximeque litterae.</p>
										<footer>Nancy Ford, <cite title="Source Title">Example Inc.</cite></footer>
									</blockquote>


								</div>


							</li>
							
							</div>
							
							<div className="owl-item" style={{width: 800}}>
								
								<li>
								<div className="testimonial">
									<div className="testimonial-img">
										<img src="assets/photos/client3.jpg" alt=""/>
									</div>

									<blockquote>
										<p>Illas, volumus prosperum. Nostras eoque statua cuius corrumpit praetor aliter quaeso propter ei,
											quam inducitur ruant doctiores sanguinem atomum molestiae, antiqua inculta dicent.</p>
										<footer>Arthur Fernandez, <cite title="Source Title">Example Inc.</cite></footer>
									</blockquote>

								</div>
							</li>
							</div>
							</div>
							</div>
							
							
						<div className="owl-controls clickable">
							<div className="owl-pagination">
								<div className="owl-page">
									<span className=""></span>
									</div>
									<div className="owl-page active">
										<span className=""></span>
										</div>
										<div className="owl-page">
											<span className=""></span>
											</div>
											</div>
											</div>
											</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

        </div>
    

  
        
    )
}

export default Testimonials