import { createStore } from "redux";
import { Reducer } from "react";

//creamos nuestro store
//el store envuelve a nuestro reducer
const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


export default store;
