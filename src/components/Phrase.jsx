import React from "react"


const Phrase = () => {

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
    
        <section className="call-2-acction" data-stellar-background-ratio="0.4">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="c2a">
						<h2>Omnibus reliquar rebus</h2>
						<p>Evertitur depravatum illo tamquam novum, possent intus laudatur hinc grate aristoteli per splendido
							soluta fabulae, ne aristippi cui deleniti nostros illud.</p>
						
					</div>
				</div>
			</div>
		</div>
	</section>

        </div>
    

  
        
    )
}

export default Phrase