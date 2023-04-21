import './App.css'
import Cards from './components/cards/Cards.jsx'

//import characters from './data.js'

//import styles from "./components/cards/cards.module.css";
import { useEffect, useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
//importamos los componentes
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Detail from './components/detail/detail.jsx'
import Login from './components/login/login.jsx';
import Credentials from './components/credentials/credentials.jsx';
import Favorites from './components/favorites/favorites';

//import "./components/card/card.module.css"
function App () {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const [access, setAccess] = useState(false);
  const userName = "ras@norte.com";
  const password = "Holi123";
  

  //seteamos el acceso a la aplicacion
  const ingresar = (userData) =>{
    //console.log(userData)
    if((userData.username === userName) && (userData.password === password )){
      //console.log("si está entrando")
      setAccess(true);
      navigate("/home");

    }else{
      console.log("no son iguales")
    }

  }

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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


  useEffect(() =>{
    !access && navigate("/");
  }, [access]);
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
        <Route path='/credentials' element={<Credentials login={ingresar}/>} />
        <Route path='/home' element={<Cards characters={characters}
          onClose={onClose}/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        {/* La ruta del detail id es dinamica, es decir, cambia segun el props que se pase*/}
        <Route path='/detail/:detailId' element={<Detail />} />
        
      </Routes>

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
