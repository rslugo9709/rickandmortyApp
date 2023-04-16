
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actionsTypes";

//creamos las acciones
export const addFavorite = (character) =>{
    //console.log(character)
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


//para filtrar las cartas

export const filterCards = (status)=>{

    return{
        type: FILTER_CARDS,
        payload: status
    }
}


//para ordenar las cartas

export const orderCards = (id) =>{
    return{
        type: ORDER_CARDS,
        payload: id
    }

}
