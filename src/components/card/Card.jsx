import React from 'react';
import styles from "./card.module.css";
import { Link } from 'react-router-dom';

export default function Card(props) {
   
   return (
      <div className={styles.card}>

         <button className={styles.cerrar} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2  className='link'>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={styles.imagenes} src={props.image} alt={props.name} /> 

      </div>
   );
}
