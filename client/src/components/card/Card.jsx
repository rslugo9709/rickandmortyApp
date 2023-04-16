import React from 'react';
import styles from "./card.module.css";
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../reducer/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
//se cambia el export default por un connect
function Card({ id, name, species, image, gender, onClose, addFavorite, deleteFavorite, myFavorites }) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{

      if(isFav){
         //se cambia el estado

         setIsFav(false);

         //se ejecuta la accion que lo quita de la lista de favoritos
         deleteFavorite(id);
         
      }else{
 
         setIsFav(true);
         
         addFavorite({ id, name, species, image, gender, onClose });
      }
   }
   //el use effect comprueba si ya se encuentra dentro de los favoritos
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={styles.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {/*La linea de abajo indica que, en caso de que no esté true, se renderiza un boton de cerrar 
         {isFav ? null: (<button className={styles.cerrar} onClick={onClose}>X</button>)}
         */}
         <button className={styles.cerrar} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
         <h2  className={styles.link}>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={styles.imagenes} src={image} alt={name} /> 

      </div>
   );
}

//esta funcion selecciona la parte de la data del store que se va a cambiar
//recibe todo el estado global y debe devolver un objeto con la data especifica necesitada

//evita que se pierda la informacion cuando se renderiza el componente
const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite: (character) =>{
         //se pasa un personaje de a funcion callback
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) =>{
         dispatch(deleteFavorite(id))
      }
   }
}


// es una closure 
export default connect(mapStateToProps, mapDispatchToProps)(Card)