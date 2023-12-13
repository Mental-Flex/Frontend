import React from "react"


const Pricing = () => {

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
    
        <section className="pricing" id="pricing">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>Our Packages</h3>
						<p>Avocent deditum long</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$9.99<small>/m</small></div>
							<div className="pt-name">Standard</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 2GB Space</li>
								<li><i className="fa fa-check"></i> 10GB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-times"></i> Free Email</li>
								<li><i className="fa fa-times"></i> Free cPanel</li>
								<li><i className="fa fa-times"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$19.99<small>/m</small></div>
							<div className="pt-name">Premium</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 5GB Space</li>
								<li><i className="fa fa-check"></i> 50GB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-times"></i> Free cPanel</li>
								<li><i className="fa fa-times"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="pricing-table featured">
						<div className="pricing-header">
							<div className="pt-price">$49.99<small>/m</small></div>
							<div className="pt-name">Developer</div>
							<div className="featured-text">Best Value</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 20GB Space</li>
								<li><i className="fa fa-check"></i> 1TB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-check"></i> Free cPanel</li>
								<li><i className="fa fa-check"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-main">Purchase</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$99.99<small>/m</small></div>
							<div className="pt-name">Enterprise</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> Unlimited Space</li>
								<li><i className="fa fa-check"></i> Unlimited Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-check"></i> Free cPanel</li>
								<li><i className="fa fa-check"></i> Free FTP</li>
								<li><i className="fa fa-check"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

        </div>
    

  
        
    )
}

export default Pricing