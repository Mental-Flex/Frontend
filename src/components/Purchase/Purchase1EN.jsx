import React, {useEffect} from "react"
import {useTranslation} from 'react-i18next'






const Purchase1EN = () => {

    const [t, i18n] = useTranslation("global")

    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.tidycal.com/js/embed.js';
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  

    return(

        

<div data-spy="scroll" data-target=".main-nav">


        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title st-center">
                    <h3>Book your appointment</h3>
                    <p>MENTAL FLEX</p>
                    <div className="tidycal-embed"  data-path="mental-flex/individualsession"></div>

                </div>
                
                </div>

                </div>

                </div>

    
    


<footer className="site-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					&copy; <a >Mental Flex</a> 2023.

                    
					
					Email <a href="mailto:mentalflexinfo@gmail.com">mentalflexinfo@gmail.com</a>
					
				</div>
				
			</div>
		</div>
	</footer>
</div>
        
    )
}

export default Purchase1EN