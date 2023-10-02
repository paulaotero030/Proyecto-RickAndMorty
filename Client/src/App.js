import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState , useEffect} from 'react';
import axios from 'axios';
import About from './components/About';
import Detail from './components/Detail';
import { Route , Routes, useNavigate, useLocation} from 'react-router-dom';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {
const location = useLocation();
const [characters, setCharacters] = useState([]);

const onSearch = (id)=> {
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id)=>{
setCharacters(
   characters.filter(character => character.id !== Number(id))
)
}

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const email = 'pauotero30@gmail.com';
const password = 'ppp1234';

function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`)
   .then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}
useEffect(() => {
   !access && navigate('/');
}, [access]);

   return (
      <div className='App'>
         {
            location.pathname!== '/' && <Nav onSearch={onSearch}/> 
         }
     
         <Routes>
      <Route path= '/' element={<Form login={login}/>}/>
      <Route path='/home' element={<Cards characters={characters}  onCLouse={onClose}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/favorites' element={<Favorites/>} />
      </Routes>
      </div>
   );
}

export default App;
