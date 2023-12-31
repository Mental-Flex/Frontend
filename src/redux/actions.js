import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const CREATE_USER = 'CREATE_USER'


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


  





 







