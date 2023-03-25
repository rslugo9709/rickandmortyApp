import { initializeUseSelector } from "react-redux/es/hooks/useSelector"
//importamos las actiomns types para usarlas en el switch
import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";



//inicializamos un estado inicial como un objeto
const initialState = {
    myFavorites:[]
}

//declaramos nuestro reducer

//la funcion siempre recibe dos cosas, el estado inicial y las acciones (type and payload)
const reducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
                //aqui se crea una copia del estado y se agrega el payload obtenido
            }
        case DELETE_FAVORITE:
            //filtramos el arreglo estado
            const filtered = state.myFavorites.filter((character) => character.id !== payload)
            //debe retornar a los que son diferentes al payload
            return{
                ...state,
                myFavorites: filtered   
                
            }
        default:
            return {...state}
    }
    
};

export default reducer;