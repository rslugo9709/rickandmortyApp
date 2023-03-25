import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./detail.module.css"

export default function Detail(){

  /* usar props del nav para no usar el use effect */
    const { detailId } = useParams();

    const [character, setCharacter] = useState();

    /* Se está siendo redundante */
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {

            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("Algo salió mal");
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps 
      }, []);


    return(

        <div className={styles.container}>
            <Link to="/home" className={styles.boton}><button >Go back</button></Link>
            {/* Revisar donde se está guardando el character*/}
            {console.log(character)}

 


        </div>

    )
}