import { API } from '../config';

export const getPublicacion = () => {
    return fetch(
    `http://localhost:4000/api/publicacion/publicaciones`,
    {
        method: 'GET'
    }
    )
    .then(response => {
        console.log(response)
        return response.json()
    })
    .catch(err => console.log(err));
}

