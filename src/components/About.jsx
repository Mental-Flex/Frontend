import React from "react"
import NavBar from "./NavBar/NavBar"
import {useTranslation} from 'react-i18next'


const About = () => {

	const [t, i18n] = useTranslation("global")

    return(

        <div data-spy="scroll" data-target=".main-nav">

       
    
        <section className="about" id="about">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>{t("about.about1")}</h3>
						<p>{t("about.about2")}</p>
					</div>
					<div className="row mb90">
						<div className="col-md-6">
							<p>{t("about.description")}</p>
						</div>
										<div className="col-md-4">
							<div className="st-member">
								<div className="st-member-img">
									<img src="assets/photos/MERCEDES.jpeg" alt="" className="img-responsive"/>
								</div>
								<div className="st-member-info">
									<strong className="st-member-name">Mercedes Frías</strong>
									<p className="st-member-pos">{t("about.card1")}</p>
									
									<div className="st-member-social">
										<ul>
											<li><a href="#" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i
														className="fa fa-facebook"></i></a></li>
											<li><a href="https://www.instagram.com/psi.mercedesfrias/" className="twitter" data-toggle="tooltip" data-placement="top" title="Instagram"><i
														className="fa fa-instagram"></i></a></li>
											<li><a href="#" className="dribbble" data-toggle="tooltip" data-placement="top" title="LinkedIn"><i
														className="fa fa-linkedin"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>


					</div>



					</div>

					<div className="row">
					
					

		

				</div>
			</div>
		</div>
	</section>

	
        </div>

       

  
        
    )
}

export default About
