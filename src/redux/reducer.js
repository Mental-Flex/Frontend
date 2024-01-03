import { GET_PUBLICATIONS } from "./actions"


const initialState = {

    publications:[],
  
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        case GET_PUBLICATIONS:
            return {
                ... state,
                publications: payload
            }


  

        default: 
        return state    
    }


    
}

export default reducer