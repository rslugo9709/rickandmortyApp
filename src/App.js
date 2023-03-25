import './App.css'
import Cards from './components/cards/Cards.jsx'

//import characters from './data.js'
import Nav from './components/nav/nav.jsx'
import styles from "./components/cards/cards.module.css";
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/about/about.jsx'
import Details from './components/detail/detail.jsx'
import Login from './components/login/login.jsx';
import Credentials from './components/credentials/credentials.jsx';

//import "./components/card/card.module.css"
function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const [access, setAccess] = useState(false);
  const userName = "rslugo@uninorte.edu.co";
  const password = "holi123";
  



  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {

       if (data.name) { 
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }


  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  } 

  //Routes es el arbol que tiene todas las rutas
  //se coloca en el element el elemento que se quiere renderizar, es decir que se quiere que aparezca en pantalla

  return (
    <div className='App'>
      <div>
        {/*Si en la ruta donde estoy es diferente a una ruta diferente a la raiz */}
        {(location.pathname !== "/" && location.pathname !== "/credentials") && <Nav onSearch={onSearch}/>}
      </div>

      
      <Routes>
        {/* Se coloca en el element se guarda las opciones que el usuario habia renderizado antes.  */}
        <Route path='/' element={<Login />} />
        <Route path='/credentials' element={<Credentials />} />
        <Route path='/home' element={<Cards characters={characters}
          onClose={onClose}/>} />

        
        <Route path='/about' element={<About/>}/>
        {/* La ruta del detail id es dinamica, es decir, cambia segun el props que se pase*/}
        <Route path='/detail/:detailId' element={<Details />} />
        
      </Routes>
      <div className={styles.container}>
      </div>
      {

        /* 
      <div>
            <Cards
              characters={characters}
              onClose={onClose}
            />
      </div>
        
        */
      }

      
    </div>
  )
}

export default App
