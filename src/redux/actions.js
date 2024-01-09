import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CREATE_USER = 'CREATE_USER'
export const GET_PUBLICATION_ID = 'GET_PUBLICATION_ID'


export function getAllPublications() {

    return (dispatch) => {
        return axios('http://localhost:3000/publications/')
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
        return axios("http://localhost:3000/category/")
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
        return axios.get(`http://localhost:3000/publications/${idPublication}`)
        .then(res => dispatch({
            type: GET_PUBLICATION_ID,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No existe ese ID');
        });
    }
}


  





 







