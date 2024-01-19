import React from "react"
import {useTranslation} from 'react-i18next'

const Questions = () => {

	const [t, i18n] = useTranslation("global")

    return(

        <div data-spy="scroll" data-target=".main-nav">

      
    
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
						<h3><i className="fa fa-question-circle"></i> {t("questions.question1")}</h3>
						<p>{t("questions.response1")}</p>
					</div>
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i> {t("questions.question2")}</h3>
						<p>{t("questions.response2")}</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i> {t("questions.question3")}</h3>
						<p>{t("questions.response3")}</p>
					</div>
					<div className="faq">
						<h3><i className="fa fa-question-circle"></i>{t("questions.question4")}</h3>
						<p>{t("questions.response4")}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    

  
        
    )
}

export default Questions