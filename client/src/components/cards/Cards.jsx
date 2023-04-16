import React from 'react';
import Card from '../card/Card.jsx';
import styles from "./cards.module.css";

export default function Cards(props) {
   const { characters } = props;
   return (

      <div className={styles.container}>
         {
            characters.map(char => <Card 
            key = {char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            id={char.id}
            onClose={() => props.onClose(char.id)}
            /> )
         }
      </div>
   );
}
