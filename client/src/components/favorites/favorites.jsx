import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import styles from "./favorites.module.css"

function Favorites({ myFavorites }){
    console.log("componente se ha renderizado")

    return(
        <div className={styles.container}>
            <div>
                <select>
                    <option value="Ascendente">
                        Ascendente
                    </option>
                    <option value="Descendente">
                        Descendente
                    </option>
                </select>
            </div>
            <h1>Aqui van las cartas</h1>
            {console.log(myFavorites)}
            {myFavorites?.map((card) =>  (
                <Card 
                key={card.id}
                id={card.id}
                species={card.species}
                gender={card.gender}
                image={card.image} />
            )
            )}
        </div>
    )
}

//escucha los cambios en la lista de favoritos
const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(null, null) (Favorites)