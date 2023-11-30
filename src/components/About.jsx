import React from "react"


const About = () => {

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
					<a className="navbar-brand" href="#"><img src="photos/logo3.png" alt="" className="img-responsive"/></a>
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
							<img src="photos/about.jpg" alt="" className="img-responsive"/>
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
									<img src="photos/member2.png" alt="" className="img-responsive"/>
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
									<img src="photos/member3.png" alt="" className="img-responsive"/>
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

    </div>



       

  
        
    )
}

export default About
