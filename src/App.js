// style sass
// import './styles/App.sass';
import style from './styles/App.module.sass'

// import des éléments permettant navigation 
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavigationHeader from './components/NavBar/NavigationHeader';
import AllAlbumsPage from './pages/AllAlbums';
import NewAlbumPage from './pages/NewAlbum'
import FavoritesPage from './pages/Favorites';

function App() {
  // URL => http://localhost:3000/  ACCUEIL '/' home page par défaut
  return (
    <BrowserRouter>
      <div className={style.App}>
          <NavigationHeader/>

          <Routes>

            {/* PAGE D'ACCUEIL */}
            <Route path='/' 
              element ={<AllAlbumsPage/>} 
            />

            {/* <Route path='/artists' 
              element ={<AllArtistsPage/>} 
            /> */}

            <Route path='/add-album' 
              element ={<NewAlbumPage/>} 
            />

            {/* <Route path='/add-artist' 
              element ={<NewArtistPage/>} 
            /> */}

            <Route path='/favorites' 
              element ={<FavoritesPage/>} 
            />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
