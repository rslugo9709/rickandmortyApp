
import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";

//creamos las acciones
export const addFavorite = (character) =>{

    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

//para borrar algo se recibe el id, y eso es lo que se carga en el payload
export const deleteFavorite = (id) =>{

    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}