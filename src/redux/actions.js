import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CREATE_USER = 'CREATE_USER'
export const GET_PUBLICATION_ID = 'GET_PUBLICATION_ID'
export const CREATE_PUBLICATION = 'CREATE_PUBLICATION'
export const GET_ORDERS = 'GET_ORDERS'
export const GET_TESTIMONIALS = 'GET_TESTIMONIALS'


export function getAllPublications() {

    return (dispatch) => {
        return axios('https://mentalflexbackend.vercel.app/publications/')
        .then(res => dispatch({
            type: GET_PUBLICATIONS,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No se encontraron publicaciones');
        });
    }


}


export const filterByCategory = (value) => {
    return {
      type: FILTER_BY_CATEGORY,
      payload: value,
    };
  };


  
  export const getCategories = () => {
    return(dispatch) => {
        return axios("https://mentalflexbackend.vercel.app/category/")
        .then(res => dispatch({
            type: GET_CATEGORIES,
            payload :res.data

        }))
        .catch(error => {
            
            alert('No se encontraron categorias');
        });
    }
  }


  
export function getPublicationById(idPublication) {
    return(dispatch) => {
        return axios.get(`https://mentalflexbackend.vercel.app/publications/${idPublication}`)
        .then(res => dispatch({
            type: GET_PUBLICATION_ID,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No existe ese ID');
        });
    }
}


export const createPublication = (formData) => {

    return(dispatch) => {
        return axios.post("https://mentalflexbackend.vercel.app/publications/", formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
        .then(res => dispatch({
            type: CREATE_PUBLICATION,
            payload :res.data

        }))
        .catch(error => {
            
            alert('No se puede crear la publicacion');
        });
    }

  }


//   export const getOrders = () => {
//     return(dispatch) => {
//         return axios("https://mentalflexbackend.vercel.app/orders/")
//         .then(res => dispatch({
//             type: GET_ORDERS,
//             payload :res.data

//         }))
//         .catch(error => {
            
//             alert('No se encontraron orders');
//         });
//     }
//   }

  export const getTestimonials = () => {
    return(dispatch) => {
        return axios("https://mentalflexbackend.vercel.app/testimonials/")
        .then(res => dispatch({
            type: GET_TESTIMONIALS,
            payload :res.data

        }))
        .catch(error => {
            
            alert('No se encontraron testimonios');
        });
    }
  }


  





 







