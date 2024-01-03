import axios from 'axios'
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS'


export function getAllPublications() {

    return (dispatch) => {
        return axios('/publications/')
        .then(res => dispatch({
            type: GET_PUBLICATIONS,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No se encontraron publicaciones');
        });
    }

}



 







