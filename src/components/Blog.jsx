import React, {useEffect} from "react"


const Blog = () => {

	

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
							<fieldset className="group">
								<label className="btn btn-default btn-main"><input type="radio" name="filter" value="all" checked="checked"/>All</label>
								<label className="btn btn-default"><input type="radio" name="filter" value="photography"/>Photography</label>
								<label className="btn btn-default"><input type="radio" name="filter" value="design"/>Design</label>
								<label className="btn btn-default"><input type="radio" name="filter" value="codding"/>Codding</label>
							</fieldset>
						</form>
					</div>

					<div className="grid shuffle" style={{position: 'relative', overflow: 'hidden', transition: 'height 250ms ease-out 0s', height: 888}}>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;photography&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility:'visible', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;design&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(418px, 0px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio2.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;photography&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(836px, 0px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio3.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;design&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(0px, 222px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio4.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;design&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(418px, 222px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio5.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;photography&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(836px, 222px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio6.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;codding&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(0px, 444px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio7.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;photography&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(418px, 444px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio8.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;codding&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(836px, 444px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio9.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;codding&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(0px, 666px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio10.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;design&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s, opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(418px, 666px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio11.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item shuffle-item filtered" data-groups="[&quot;design&quot;]" style={{position: 'absolute', top: 0, left: 0, transition: 'transform 250ms ease-out 0s opacity 250ms ease-out 0s', visibility: 'visible', opacity: 1, transform: 'translate3d(836px, 666px, 0px) scale3d(1, 1, 1)'}}>
							<img src="assets/photos/portfolio12.jpg" alt=""/>
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
					</div>

				</div>
			</div>
		</div>
	</section>


	

        </div>
    

  
        
    )
}

export default Blog