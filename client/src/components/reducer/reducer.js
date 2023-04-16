
//importamos las actiomns types para usarlas en el switch
import { ADD_FAVORITE, DELETE_FAVORITE, ORDER_CARDS, FILTER_CARDS } from "./actionsTypes";



//inicializamos un estado inicial como un objeto
const initialState = {
    myFavorites:[],
    allCharacters: []
}

//declaramos nuestro reducer

//la funcion siempre recibe dos cosas, el estado inicial y las acciones (type and payload)
const reducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload]
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
        case FILTER_CARDS:
            const filteredGender = [...state.allCharacters].filter((char) => char.gender === payload)

            return{
                ...state,
                myFavorites: filteredGender
            }

        case ORDER_CARDS:
            const ordered = [...state.allCharacters].sort((a,b) =>{
                if(a.id > b.id){
                    return payload === "Ascendente" ? 1: -1
                }else if(a.id < b.id){
                    return payload === "Descendente" ? 1:-1
                }else{
                    return 0;
                }
            });
            return{
                ...state,
                myFavorites: ordered
            };

        default:
            return {...state}
    }
    
};

export default reducer;