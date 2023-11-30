import React from "react"


const Home = () => {

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

<section className="home" id="home" data-stellar-background-ratio="0.4">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="st-home-unit">
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
</div>
       

  
        
    )
}

export default Home