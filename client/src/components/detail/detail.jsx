import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./detail.module.css"
import Card from "../card/Card";



export default function Detail(){

  const navigate = useNavigate();
  /* usar props del nav para no usar el use effect */
    const { detailId } = useParams();

    const [character, setCharacter] = useState();
    

    /*11:39 PM Se está siendo redundante */

    useEffect(()=>{
      fetch(`http://localhost:3001/rickandmorty/character/${detailId}}`)
      .then((response) => response.json())
      .then((char) => {

        if (char.name) {
          
          setCharacter(char);
          
        } else {
          window.alert("No hay personajes con ese ID");
          
        }
      })
      .catch(() =>{
        window.alert("no hay personajes con ese ID")
      });
      return setCharacter({});

    }, [detailId]);

      

    


          
          // eslint-disable-next-line react-hooks/exhaustive-deps 
    
      


    return(

        <div >
            <button accessKey="" className={styles.boton} onClick={() => navigate(-1)}>Go back</button>
            {/* Revisar donde se está guardando el character*/}
            {console.log("aqui arroja error")}
            {console.log(character)}

            <div className={styles.container}>
            {
              character ? <div>
                <h1>
                  {character.name}
                </h1>
                
                <h4>{character.status}</h4>
                <h4>{character.specie}</h4>
                <h4>{character.gender}</h4>
                <h4>{character.origin?.name}</h4>
                <img  src={character.image} alt={"name"} /> 

              </div> : ""
            }
            </div>


        </div>

    )
}