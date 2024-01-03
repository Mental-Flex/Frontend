import Card from "../Blog/Card";



const CardsContainer = (props) => {

    var px1= 0
    var px2= 0
    




    return(
        <div className="grid shuffle" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'height 250ms ease-out 0s', height: '100vh' }}>

            {
                props.publications && props.publications.map( (e, index) => {

                    if(px1 < 836){
                        px1=px1+418
                    }else{
                        px1=0
                        px2=px2+222
                    }

                    const transformValue = `translate3d(${px1}px, ${px2}px, 0px) scale3d(1, 1, 1)`;
                    


                    return <Card 

                    name={e.name} 
                    description= {e.description}
                    image= {e.image}
                    transform= {transformValue}
                   
                    

                    />

       
                        
                    
                })
            }

        </div>
    )



}

export default CardsContainer