import React, { useEffect } from "react"
import {useTranslation} from 'react-i18next'
import './Congratulations.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const Congratulations = () => {

    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        toast.success('Successful purchase!', {
            position: 'bottom-left',
          });
    }, [])

    return(

        <>

        


        <nav className='navbarr' >
          <ul >

            <li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer' }}>ES</a></li>
            <li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer' }}>EN </a></li>
           
          </ul>
        </nav>




        <div className="section-title st-center">
						<h3>{t("congratulations.congratulations1")}</h3>
                        <br/>
                        <h3>{t("congratulations.congratulations2")}</h3>
                        <br/>
                        <br/>
                        <br/>
						<p>{t("congratulations.congratulations3")}</p>
            <p>{t("congratulations.congratulations4")}</p>
					</div>

               

<div>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <button className="btn btn-main btn-lg" style={{ fontSize: '2em', padding: '20px' }} onClick={() => { window.location.href = "https://www.mental-flex.com/" }} data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending...">
                {t("congratulations.return")}
                </button>
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

        </>
    )
}

export default Congratulations