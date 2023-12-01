import React from "react"



const Landing = () => {

	const sectionStyle = {
		backgroundPosition: '50% 0px',
	  };


	  const itemStyle = {
		display: 'block',
		width: '4800px',
		left: '0px',
		transition: 'all 0ms ease 0s',
		transform: 'translate3d(-800px, 0px, 0px)',
		transformOrigin: '1200px center',
		perspectiveOrigin: '1200px center',
	  };

	  const carouselStyle = {
		display: 'block',
		opacity: 1,
	  };


	  const miEstilo = {
		width: '800px',
		position: 'relative',
		left: '800px',
	  };
	

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
						<li><a href="#service">Service</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#pricing">Pricing</a></li>
						<li><a href="#blog">Blog</a></li>
						<li><a href="#contact">Contact Us</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>

	<section className="home" id="home" data-stellar-background-ratio="0.4" style={sectionStyle}>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="st-home-unit" style={{ padding: '258px 0', opacity: 1 }}>
						<div className="hero-txt">
							<p className="hero-work">Web Design - Web Development - UX Design</p>
							<h2 className="hero-title">BEST Template for Agency</h2>
							<p className="hero-sub-title">We Provide Hight Quality Bootstrap Template</p> 
							 <a href="#" className="btn btn-default btn-lg left-btn">Purchase Now</a> 
							<a href="#" className="btn btn-main btn-lg">Find Out More</a>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div className="mouse-icon">
			<div className="wheel"></div>
		</div>
	</section>



	<section className="about" id="about">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>WelCome to Sept</h3>
						<p>We are a creative Designer</p>
					</div>
					<div className="row mb90">
						<div className="col-md-6">
							<p>Texit l, habere se indocti magnosque culpa gravioribus discedere eas indignae diogenem, praetermissum
								effugiendorum vult dicent, periculum dolere putat. Iucunditatem quid turbulenta patre eae depravatum
								talem elaborare plerisque repellere, o potiendi tuo aliter, militaris sint tranquillat liberalitati.
								Locus delicata divelli intemperantes audeam maximisque sitne pulcherrimum aegritudines studium. Habent
								inveniri fidelissimae aequi andriam laudabilis. Libido censet assiduitas quae probantur tantalo
								exquisitaque erunt laudatur optari. Late suapte veterum enim qui magna securi eaque proficiscuntur.</p>
						</div>
						<div className="col-md-6">
							<img src="assets/photos/about.jpg" alt="" className="img-responsive"/>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<div className="st-member">
								<div className="st-member-img">
									<img src="assets/photos/member1.png" alt="" className="img-responsive"/>
								</div>
								<div className="st-member-info">
									<strong className="st-member-name">Jerry Ward</strong>
									<p className="st-member-pos">CEO</p>
									<div className="skills">
										<div className="skill">
											<strong>HTML</strong>
											<span>90%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="90"
													aria-valuemin="0" aria-valuemax="100" style={{width: 90}}>
													<span className="sr-only">90% Complete</span>
												</div>
											</div>
										</div>
										<div className="skill">
											<strong>CSS</strong>
											<span>70%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="70"
													aria-valuemin="0" aria-valuemax="100" style={{width: 70}}>
													<span className="sr-only">70% Complete</span>
												</div>
											</div>
										</div>
										<div className="skill">
											<strong>JavaScript</strong>
											<span>86%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="86"
													aria-valuemin="0" aria-valuemax="100" style={{width: 86}}>
													<span className="sr-only">86% Complete</span>
												</div>
											</div>
										</div>
									</div>
									<div className="st-member-social">
										<ul>
											<li><a href="#" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i
														className="fa fa-facebook"></i></a></li>
											<li><a href="#" className="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i
														className="fa fa-twitter"></i></a></li>
											<li><a href="#" className="dribbble" data-toggle="tooltip" data-placement="top" title="Dribbble"><i
														className="fa fa-dribbble"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="st-member">
								<div className="st-member-img">
									<img src="assets/photos/member2.png" alt="" className="img-responsive"/>
								</div>
								<div className="st-member-info">
									<strong className="st-member-name">Sarah Moore</strong>
									<p className="st-member-pos">Designer</p>
									<div className="skills">
										<div className="skill">
											<strong>HTML</strong>
											<span>90%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="90"
													aria-valuemin="0" aria-valuemax="100" style={{width: 90}}>
													<span className="sr-only">90% Complete</span>
												</div>
											</div>
										</div>
										<div className="skill">
											<strong>CSS</strong>
											<span>70%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="70"
													aria-valuemin="0" aria-valuemax="100" style={{width: 70}}>
													<span className="sr-only">70% Complete</span>
												</div>
											</div>
										</div>
										<div className="skill">
											<strong>JavaScript</strong>
											<span>86%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="86"
													aria-valuemin="0" aria-valuemax="100" style={{width: 86}}>
													<span className="sr-only">86% Complete</span>
												</div>
											</div>
										</div>
									</div>
									<div className="st-member-social">
										<ul>
											<li><a href="#" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i
														className="fa fa-facebook"></i></a></li>
											<li><a href="#" className="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i
														className="fa fa-twitter"></i></a></li>
											<li><a href="#" className="dribbble" data-toggle="tooltip" data-placement="top" title="Dribbble"><i
														className="fa fa-dribbble"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="st-member">
								<div className="st-member-img">
									<img src="assets/photos/member3.png" alt="" className="img-responsive"/>
								</div>
								<div className="st-member-info">
									<strong className="st-member-name">Rose Johnson</strong>
									<p className="st-member-pos">Developer</p>
									<div className="skills">
										<div className="skill">
											<strong>HTML</strong>
											<span>90%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="90"
													aria-valuemin="0" aria-valuemax="100" style={{width: 90}}>
													<span className="sr-only">90% Complete</span>
												</div>
											</div>
										</div>
										<div className="skill">
											<strong>CSS</strong>
											<span>70%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="70"
													aria-valuemin="0" aria-valuemax="100" style={{width: 70}}>
													<span className="sr-only">70% Complete</span>
												</div>
											</div>
										</div>
										<div className="skill">
											<strong>JavaScript</strong>
											<span>86%</span>
											<div className="progress">
												<div className="progress-bar progress-bar-sept" role="progressbar" aria-valuenow="86"
													aria-valuemin="0" aria-valuemax="100" style={{width: 86}}>
													<span className="sr-only">86% Complete</span>
												</div>
											</div>
										</div>
									</div>
									<div className="st-member-social">
										<ul>
											<li><a href="#" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i
														className="fa fa-facebook"></i></a></li>
											<li><a href="#" className="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i
														className="fa fa-twitter"></i></a></li>
											<li><a href="#" className="dribbble" data-toggle="tooltip" data-placement="top" title="Dribbble"><i
														className="fa fa-dribbble"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>


					</div>

				</div>
			</div>
		</div>
	</section>

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
								<div className="st-feature-icon"><i className="fa fa-cog"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-university"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-comments-o"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-life-ring"></i></div>
								<strong className="st-feature-title">Option Panel</strong>
								<p>Pro adiuvet, honesto foris liberiusque statuat theseo scribimus mererer percurri geometria.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="features-desc">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<img src="assets/photos/feature.png" alt="" className="img-responsive"/>
				</div>
				<div className="col-md-7">
					<h3 className="bottom-line">SOME OF OUR IMPORTANT FEATURES</h3>
					<p>Graeci decore metrodorus conturbamur nostri alii veniamus temperantia audivi, discidia optari pariter
						formidines nimis dissidens quosvis epicureis, iustitia inbecilloque cognoscerem remotis solet duce pondere,
						stoicos amaret, faciam sic reperiuntur, timeam dedocere spatio censet cernantur dicas miseram alienum.
						Attico fonte errem neque, causam nimium reliqui fana, duo sane consequi quos cogitarent dicant profecto.</p>
					<a href="#" className="btn btn-main btn-lg">Read more</a>
				</div>
			</div>
		</div>
	</section>

	<section className="call-2-acction" data-stellar-background-ratio="0.4">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="c2a">
						<h2>Omnibus reliquar rebus</h2>
						<p>Evertitur depravatum illo tamquam novum, possent intus laudatur hinc grate aristoteli per splendido
							soluta fabulae, ne aristippi cui deleniti nostros illud.</p>
						<a href="#" className="btn btn-main btn-lg">Purchase Now</a>
					</div>
				</div>
			</div>
		</div>
	</section>


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
								<label className="btn btn-default btn-main"><input type="radio" name="filter" value="all"
										checked="checked"/>All</label>
								<label className="btn btn-default"><input type="radio" name="filter" value="photography"/>Photography</label>
								<label className="btn btn-default"><input type="radio" name="filter" value="design"/>Design</label>
								<label className="btn btn-default"><input type="radio" name="filter" value="codding"/>Codding</label>
							</fieldset>
						</form>
					</div>

					<div className="grid">
						<figure className="portfolio-item" data-groups='["photography"]'>
							<img src="assets/photos/portfolio.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["design"]'>
							<img src="assets/photos/portfolio2.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["photography"]'>
							<img src="assets/photos/portfolio3.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["design"]'>
							<img src="assets/photos/portfolio4.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["design"]'>
							<img src="assets/photos/portfolio5.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["photography"]'>
							<img src="assets/photos/portfolio6.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["codding"]'>
							<img src="assets/photos/portfolio7.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["photography"]'>
							<img src="assets/photos/portfolio8.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["codding"]'>
							<img src="assets/photos/portfolio9.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["codding"]'>
							<img src="assets/photos/portfolio10.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["design"]'>
							<img src="assets/photos/portfolio11.jpg" alt="" />
							<figcaption>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
								<a href="#" className="btn btn-main"><i className="fa fa-link"></i> View more</a>
							</figcaption>
						</figure>
						<figure className="portfolio-item" data-groups='["design"]'>
							<img src="assets/photos/portfolio12.jpg" alt="" />
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


	<section className="testimonials">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="testimonials-carousel">
						<ul className="owl-carousel owl-theme" style={carouselStyle}>
							<div className="owl-wrapper-outer"><div className="owl-wrapper owl-origin" style={itemStyle}><div className="owl-item owl-backSlide-out" style={miEstilo}><li>
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
							</li></div><div className="owl-item owl-backSlide-in" style={{width: 800}}><li>
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
							</li></div><div className="owl-item" style={{width: 800}}><li>
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
							</li></div></div></div>
							
							
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
	<section className="faq-sec">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					 <h2 className="tac">frequently asked questions</h2> 
					<div className="section-title st-center">
						<h3>Some questions</h3>
						<p>frequently asked questions</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i> Minime paulo beatus stare?</h3>
						<p>Praesidium quaerat doloribus turpis fruuntur vocant postremo optimus utraque, veserim vitae appellant
							fructuosam, mediocris consistat impetu illae coniunctione modi consequentis nosque, vis qui deorum, poenis
							fuisse timorem ferae fastidium.</p>
					</div>
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i> Ferentur interrogari diceret?</h3>
						<p>Pertinerent non importari, populo faciendi civium vetuit. Gravitate numquam praesentium fabulas. Abest
							ponatur ineruditus restat consoletur causam, ordiamur temperantiam repellat desistemus conquirendae
							molestia aiunt discenda monet.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i> Dicent erigimur secutus fortunae?</h3>
						<p>Quarum difficilius aegritudo epularum municipem alias. Vidisse litteris, rationibus eadem, mandaremus
							maluisset, delectus terrore angusta deduceret numquam fidelissimae mens gravissimo propter, tradit,
							fastidium facta facerem qua quippiam vacuitate cupiditatum admirer navigandi.</p>
					</div>
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i> Molestiae dedocere effluere?</h3>
						<p>Habeo mala nocet perpetiuntur legendos dicemus levitatibus abducat futura, occultarum probant vitae
							evertunt laudantium docendi difficilem, offendit concederetur tuo hortensio deserere, molita gaudemus
							titillaret difficilius, parum timeret unum molestiam omnis vitae.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="call-us">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h3>If you like to work with us</h3>
					<a href="#" className="btn btn-default-o btn-lg">Call Us Now</a>
				</div>
			</div>
		</div>
	</section>
	<section className="blog" id="blog">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>Recent News</h3>
						<p>Some Recent News from Blog</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-8">
					<div className="blog-post">
						<div className="post-meta">
							<span className="author"><a href="#"><img src="assets/photos/author.jpg" alt=""/> Raju Ahmmed</a></span>,
							<span>Posted in <a href="#">WordPress</a></span>,
							<span>At <strong>10 January, 2015</strong></span>
						</div>
						<h2 className="post-title"><a href="#">A example blog post with image</a></h2>
						<div className="post-thumb"><a href="#"><img src="assets/photos/post-thumb.jpg" alt="" className="img-responsive"/></a>
						</div>
						<div className="post-content">
							<p>Torquatos nihil utuntur liberamur benivole epularum evertunt accommodare, democrito didicerimus occulta
								egregios, praeclaram familiaritatem novi accusamus delectus opinemur mutae expetenda perpauca eas,
								concederetur fecerit ignorare delectari industria patientiamque. Invenire probes contereret maior opinor
								iucundo inciderint depravate, concupiscunt, deorum didicerimus, solitudo ingeniis confectum attento
								illustribus. Quanta suam, quieti usu necessarius. Sapienter existimo fruenda contentiones deduceret
								dolere minuti animi scientia, inbecilloque servire evertunt. Exeduntur vivi laudatum dicitur omnia
								verterem fuerit inanitate efficiatur <a href="#" className="more-link">Continue reading <span
										className="meta-nav">&rarr;</span></a></p>
						</div>
					</div>
					<div className="blog-post">
						<div className="post-meta">
							<span className="author"><a href="#"><img src="assets/photos/author.jpg" alt=""/> Raju Ahmmed</a></span>,
							<span>Posted in <a href="#">WordPress</a></span>,
							<span>At <strong>10 January, 2015</strong></span>
						</div>
						<h2 className="post-title"><a href="#">A example blog post with image</a></h2>
						<div className="post-thumb"><a href="#"><img src="assets/photos/post-thumb.jpg" alt="" className="img-responsive"/></a>
						</div>
						<div className="post-content">
							<p>Torquatos nihil utuntur liberamur benivole epularum evertunt accommodare, democrito didicerimus occulta
								egregios, praeclaram familiaritatem novi accusamus delectus opinemur mutae expetenda perpauca eas,
								concederetur fecerit ignorare delectari industria patientiamque. Invenire probes contereret maior opinor
								iucundo inciderint depravate, concupiscunt, deorum didicerimus, solitudo ingeniis confectum attento
								illustribus. Quanta suam, quieti usu necessarius. Sapienter existimo fruenda contentiones deduceret
								dolere minuti animi scientia, inbecilloque servire evertunt. Exeduntur vivi laudatum dicitur omnia
								verterem fuerit inanitate efficiatur <a href="#" className="more-link">Continue reading <span
										className="meta-nav">&rarr;</span></a></p>
						</div>
					</div>
					<div className="blog-post">
						<div className="post-meta">
							<span className="author"><a href="#"><img src="assets/photos/author.jpg" alt=""/> Raju Ahmmed</a></span>,
							<span>Posted in <a href="#">WordPress</a></span>,
							<span>At <strong>10 January, 2015</strong></span>
						</div>
						<h2 className="post-title"><a href="#">A example blog post without image</a></h2>
						<div className="post-content">
							<p>Torquatos nihil utuntur liberamur benivole epularum evertunt accommodare, democrito didicerimus occulta
								egregios, praeclaram familiaritatem novi accusamus delectus opinemur mutae expetenda perpauca eas,
								concederetur fecerit ignorare delectari industria patientiamque. Invenire probes contereret maior opinor
								iucundo inciderint depravate, concupiscunt, deorum didicerimus, solitudo ingeniis confectum attento
								illustribus. Quanta suam, quieti usu necessarius. Sapienter existimo fruenda contentiones deduceret
								dolere minuti animi scientia, inbecilloque servire evertunt. Exeduntur vivi laudatum dicitur omnia
								verterem fuerit inanitate efficiatur <a href="#" className="more-link">Continue reading <span
										className="meta-nav">&rarr;</span></a></p>

						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="widgets">
						<div className="widget">
							<form action="" className="">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search..."/>
									<span className="input-group-btn">
										<button className="btn btn-default btn-lg" type="submit"><i className="fa fa-search"></i></button>
									</span>
								</div>
							</form>
						</div>
						<div className="widget">
							<h2 className="widget-title">Categories</h2>
							<ul>
								<li><a href="#">Video <span className="badge pull-right">5</span></a></li>
								<li><a href="#">Flyer <span className="badge pull-right">7</span></a></li>
								<li><a href="#">PSD <span className="badge pull-right">2</span></a></li>
								<li><a href="#">Theme <span className="badge pull-right">6</span></a></li>
								<li><a href="#">Music <span className="badge pull-right">8</span></a></li>
								<li><a href="#">Bootstrap <span className="badge pull-right">2</span></a></li>
								<li><a href="#">WordPress <span className="badge pull-right">9</span></a></li>
								<li><a href="#">Framework <span className="badge pull-right">7</span></a></li>
							</ul>
						</div>
						<div className="widget">
							<h2 className="widget-title">Recent Post</h2>
							<ul>
								<li>
									<div className="recent-post clearfix">
										<a href="#" className="post-thumb"><img src="assets/photos/post-thumb-sm.jpg"/></a>
										<h2 className="post-title">
											<a href="#">A example blog post with image</a>
										</h2>
										<div className="post-meta">
											<span>Posted in <a href="#">WordPress</a></span>
										</div>

									</div>
								</li>
								<li>
									<div className="recent-post clearfix">
										<a href="#" className="post-thumb"><img src="assets/photos/post-thumb-sm.jpg"/></a>
										<h2 className="post-title">
											<a href="#">A example blog post with image</a>
										</h2>
										<div className="post-meta">
											<span>Posted in <a href="#">WordPress</a></span>
										</div>

									</div>
								</li>
								<li>
									<div className="recent-post clearfix">
										<a href="#" className="post-thumb"><img src="assets/photos/post-thumb-sm.jpg"/></a>
										<h2 className="post-title">
											<a href="#">A example blog post with image</a>
										</h2>
										<div className="post-meta">
											<span>Posted in <a href="#">WordPress</a></span>
										</div>

									</div>
								</li>
								<li>
									<div className="recent-post clearfix">
										<a href="#" className="post-thumb"><img src="assets/photos/post-thumb-sm.jpg"/></a>
										<h2 className="post-title">
											<a href="#">A example blog post with image</a>
										</h2>
										<div className="post-meta">
											<span>Posted in <a href="#">WordPress</a></span>
										</div>

									</div>
								</li>
							</ul>
						</div>
						<div id="tag_cloud-3" className="widget widget_tag_cloud">
							<h2 className="widget-title">Tags</h2>
							<div className="tagcloud">
								<a href="#">bootstrap3</a>
								<a href="#">css</a>
								<a href="#">html</a>
								<a href="#">js</a>
								<a href="#">php</a>
								<a href="#">wordpress</a>
								<a href="#">jquery</a>
								<a href="#">less</a>
								<a href="#">editor</a>
								<a href="#">responsive</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="subscribe">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h3 className="subscribe-title">Subscribe Newsletter</h3>
					<form role="form" className="subscribe-form">
						<div className="input-group">
							<input type="email" className="form-control" id="mc-email" placeholder="Enter E-mail..."/>
							<span className="input-group-btn">
								<button className="btn btn-main btn-lg" type="submit">Subscribe!</button>
							</span>
						</div>
					</form>
					<div className="subscribe-result"></div>
					<p className="subscribe-or">or</p>
					<ul className="subscribe-social">
						<li><a href="#" className="social twitter"><i className="fa fa-twitter"></i> Follow</a></li>
						<li><a href="#" className="social facebook"><i className="fa fa-facebook"></i> Like</a></li>
						<li><a href="#" className="social rss"><i className="fa fa-rss"></i> RSS</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title st-center">
              <h3>Contact Us</h3>
              <p>Get in Touch with Us</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form className="contact-form" role="form">
              <input type="text" className="form-control" id="fname" name="fname" placeholder="Your Full Name" />
              <input type="email" className="form-control" id="email" name="email" placeholder="Your E-mail" />
              <input type="text" className="form-control" id="subj" name="subj" placeholder="Your Subject" />
              <textarea id="mssg" name="mssg" placeholder="Your Message" className="form-control" rows="10" />
              <button className="btn btn-main btn-lg" type="submit" id="send" data-loading-text="<i className='fa fa-spinner fa-spin'></i> Sending...">
                <i className="fa fa-paper-plane "></i>
                Send
              </button>
            </form>
            <div id="result-message" role="alert"></div>
          </div>
          <div className="col-md-6">
            <p>
              Homines praetore aperiam aegritudine turpe quietus, amorem errore meo horreat triario quantus rectas tollitur.
              Infimum audiebamus saluto disciplina praetermittenda, aspernatur vocent firmitatem contenta eademque ibidem quales
              efficiat. Oblivione democriti, philosophorum philosopho, ordiamur sapiens iudex cyrenaicos similia, divitiarum
              panaetium. Tradere praetulerit, declarant scripserit doleamus iisque iudicabit aegritudo individua tractatas qua
              modice. Difficilius loqueretur improbe aetatis consectetur solis velint, grata quiddam partus occulta delectari
              maior, theseo eveniunt, turpius nesciunt amicitias constantia seque, utraque, statu genus scriptorem fugit fuissent
              duxit, compluribus primos scaevolam.
            </p>
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              795 Folsom Ave, Suite 600
              <br />
              San Francisco, CA 94107
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
      </div>
    </section>

	<footer className="site-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					&copy; <a href="https://www.cantothemes.com">CantoThemes</a> 2015.
					
					Designed by <a href="https://www.cantothemes.com">CantoThemes</a>
					
				</div>
				<div className="col-md-12">
					Distributed by <a href="https://themewagon.com/">Themewagon</a>

				</div>
			</div>
		</div>
	</footer>

	
</div>


  
        
    )
}

export default Landing