import { CREATE_PUBLICATION, FILTER_BY_CATEGORY, GET_CATEGORIES, GET_PUBLICATIONS, GET_PUBLICATION_ID } from "./actions"


const initialState = {

    publications:[],
    filtered:[],
    categories: [],
    detail:{}
  
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        case GET_PUBLICATIONS:
            return {
                ... state,
                publications: payload
            }


            case FILTER_BY_CATEGORY:
                let filteredPublications;

                
                
                if (state.publications.length > 0) {
                  filteredPublications = payload === 'All'
                    ? state.publications
                    : state.publications.filter((r) => r.category.includes(payload));
                } else {
                  alert('No hay recetas con esa categoría');
                  return { ...state }; // Devuelve el estado actual sin cambios
                }
              
                return {
                  ...state,
                  filtered: filteredPublications,
                };
              


            case GET_CATEGORIES:
                return{
                    ... state,
                    categories: payload,
    
                }


                case GET_PUBLICATION_ID:
                    return{
        
                        ... state,
                        detail: payload
        
                    }


            case CREATE_PUBLICATION:
            return{
                ... state,
                publications: [... state.publications, payload],
               

            }


                
    

           


  

        default: 
        return state    
    }


    
}

export default reducer