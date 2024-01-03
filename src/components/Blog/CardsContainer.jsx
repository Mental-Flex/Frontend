import Card from "../Blog/Card";



const CardsContainer = (props) => {




    return(
        <div >

            {
                props.publications && props.publications.map( e => {
                    return <Card

                    name={e.name} 
                    description= {e.description}
                    image= {e.image}
                   
                    

                    />

       
                        
                    
                })
            }

        </div>
    )



}

export default CardsContainer