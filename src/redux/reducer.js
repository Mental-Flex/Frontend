import { FILTER_BY_CATEGORY, GET_CATEGORIES, GET_PUBLICATIONS } from "./actions"


const initialState = {

    publications:[],
    filtered:[],
    categories: []
  
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
    

           


  

        default: 
        return state    
    }


    
}

export default reducer