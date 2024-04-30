import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/navBar';
import Main from './components/pages/dashBoard/main';
import Ingredient from './components/pages/ingredient/ingredient';
import Categories from './components/pages/categories/categories';
import Achat from './components/pages/achat/achat';
import Stockage from './components/pages/stockage/stockage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/ingredient' element = {<Ingredient/>}/>
          <Route path='/Categorie' element = {<Categories/>}/>
          <Route path='/achat'element = {<Achat/>}/>
          <Route path='/stockage' element = {<Stockage/>}/>
      </Routes>
    </div>
  );
}

export default App;
