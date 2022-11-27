// logique card album unitaire ici 
// map() sur chaque item dans component AlbumCardList

// scoped module
import styles from '../../styles/AlbumCard/AlbumCardStyles.module.sass';

// context hooks establishing connexion between this component and the context
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function AlbumCard(props) {
    
    console.log(props.id)
    // context changing favorites btn status
    const favoritesCtx = useContext(FavoritesContext);
    
    // is album favorite? check true or false
    const albumIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    
    // function triggered by clicking on favorite btn
    function toggleFavoriteBtn() {
        if (albumIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
            console.log('btn clicked removed from favorites', props.id)
        } else {
            favoritesCtx.addFavorite(
                { 
                    id : props.id,
                    artiste : props.artiste,
                    titre : props.titre,
                    date : props.date,
                    genre : props.genre,
                    image : props.image,
                }
            )
        };
    }
    
    console.log('PROPS ALBUMCARD COMPONENT', props)
    
    return(
        
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <img className={styles.cardImg} src={props.image} alt ={props.artiste}/>
                    <div className={styles.cardTextBtn}>
                        
                        <div className={styles.cardText}>
                            <h2><span>Titre:</span> {props.titre}</h2>
                            <h3 ><span>Artiste:</span> {props.artiste}</h3>
                            <p><span>Genre:</span>  {props.genre}</p>
                            <p><span>Date de sortie:</span> {props.date}</p>
                        </div>
                        
                        <div className={styles.cardBtn}>
                            <button onClick={toggleFavoriteBtn}>
                                {albumIsFavorite ? 'Remove from favorites' : 'To Favorites'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default AlbumCard