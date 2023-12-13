import React from "react"


const Questions = () => {

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
        </div>
    

  
        
    )
}

export default Questions