// import './NavigationHeaderStyles.sass'
import style from '../../styles/NavigationHeader/NavigationHeaderStyles.module.sass'

// navigation
import {Link} from 'react-router-dom'


import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context'


function NavigationHeader() {
    
    // Connexion to favorites-context to display number of favorites in badge
    const favoriteCtx = useContext(FavoritesContext);
    
    
    return(
        <header className={style.header}>
            
            <div className={style.title}>
                <h2> MUSIC APP </h2>
                <h3> YOUR FAVORITE URBAN MUSIC </h3>
            </div>
            
            <ul >
                <li>
                    <Link to={'/'}>Albums</Link>
                </li>
                {/* <li>
                    <Link to={'/artists'}>Artists</Link>
                </li> */}
                <li>
                    <Link to={'/add-album'}>New Album</Link>
                </li>
                {/* <li>
                    <Link to={'/add-artist'}>New Artist</Link>
                </li> */}
                <li>
                    <Link to={'/favorites'}>
                        My Favorites
                        <span className={style.badge}>
                            {favoriteCtx.totalFavorites}
                        </span>
                    </Link>
                </li>
            </ul>
            
        </header>
    )
}

export default NavigationHeader