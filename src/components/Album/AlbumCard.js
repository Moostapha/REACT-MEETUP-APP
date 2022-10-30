// logique card album unitaire ici 
// map() sur chaque item dans component AlbumCardList

// scoped module
import styles from './AlbumCardStyles.module.sass'

function AlbumCard(props) {
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
                            <button>Add To Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default AlbumCard