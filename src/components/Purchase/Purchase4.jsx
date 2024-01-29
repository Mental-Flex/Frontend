import React from "react"
import {useTranslation} from 'react-i18next'
import './Purchase.css'
import Footer from "../Footer"




const Purchase4 = () => {

    const [t, i18n] = useTranslation("global")

    return(

        <>

        <div>


<nav className='navbar' >
          <ul >

            <li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer' }}>ES</a></li>
            <li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer' }}>EN </a></li>
           
          </ul>
        </nav>



                       
                        
                   



        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title st-center">
                    <h3>{t("confirmation.confirmation1")}</h3>
                    <p>{t("confirmation.confirmation2")}</p>
                </div>

                </div>

                </div>

                </div>


               


  </div>


<div>

<footer className="site-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					&copy; <a href="https://www.cantothemes.com">Mental Flex</a> 2023.

                    
					
					Email <a href="https://www.cantothemes.com">mentalflexinfo@gmail.com</a>
					
				</div>
				
			</div>
		</div>
	</footer>
</div>
        </>
    )
}

export default Purchase4