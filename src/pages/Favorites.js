import {useContext} from 'react';

// import of FavoritesContext object
import FavoritesContext from '../store/favorites-context';

// Recycling AlbumCardList for displayin favorites added
import AlbumCardList from '../components/Album/AlbumCardList';

function FavoritesPage() {
    
    // Connection of this component to the context
    const favoritesCtx = useContext(FavoritesContext) ;
    
    // displayin message if no favorites added
    // helper
    let content;
    
    if (favoritesCtx.totalFavorites === 0) {
        content = <h3> Vous n'avez aucun album favori pour le moment</h3> 
    } else {
        content = <AlbumCardList albums={favoritesCtx.favorites}/>
    }
    
    return(
        <section>
            {content}
        </section>
    )
}

export default FavoritesPage