// scoped module style
import styles from '../../styles/ALbumForm/NewAlbumFormStyles.module.sass'

//useRef()
import {useRef} from 'react'

// navigation programmatique => once form soumis, on quitte la page NewAlbum
import { useNavigate } from 'react-router-dom'

function NewAlbumForm(props) {
    
    // référencement des inputs du form
    const imgInput = useRef();
    const titreInput = useRef();
    const artisteInput = useRef();
    const genreInput = useRef();
    const dateInput = useRef();
    
    // history mode pour retourner vers AllAlbums page
    const navigate = useNavigate();
    
    // fonction bouton Add Album
    function submitHandler(event){
        
        event.preventDefault();  // correction comportement par défaut submit
        console.log('clicked');
        
        // saisie valeurs des inputs (entrées par le user)
        const enteredImg = imgInput.current.value;
        const enteredTitre = titreInput.current.value;
        const enteredArtiste = artisteInput.current.value;
        const enteredGenre = genreInput.current.value;
        const enteredDate = dateInput.current.value;
        
        // Regroupement des saisies dans objet albumData qui seront send via axios à la bd
        const albumData = {
            image: enteredImg ,
            titre: enteredTitre ,
            artiste: enteredArtiste ,
            genre:  enteredGenre,
            date: enteredDate ,
        };
        
        console.log('SAISIES DU FORMULAIRE:', albumData);
        
        // passage infos albumData vers page AllAlbum (component parent) via props valeur fonction
        // ajout de cette props au niveau du component <NewAlbumForm/>
        props.onAddAlbum(albumData);
        
        // Navigation programmatique retour sur page AllAlbums (Accueil)
        navigate('/')
        
    }
    
    return(
        <div>
            <h2 className={styles.h2}>Add your favorite album</h2>
            
            <form className={styles.form} onSubmit={submitHandler}>
                
                    <label className={styles.label} htmlFor='img'>Image</label>
                    <input 
                        className={styles.input} type='url' required id='img' 
                        placeholder='Url image album'
                        ref={imgInput}
                    ></input>
                
                    <label className={styles.label} htmlFor='titre'>Titre</label>
                    <input 
                        className={styles.input} type='text' required id='titre' 
                        placeholder='Titre album'
                        ref={titreInput}
                    ></input>
                
                    <label className={styles.label} htmlFor='artiste'>Artiste</label>
                    <input 
                        className={styles.input} type='text' required id='artiste' 
                        placeholder='Artise ou groupe'
                        ref={artisteInput}
                    ></input>
                
                    <label className={styles.label} htmlFor='genre'>Genre</label>
                    <input 
                        className={styles.input} type='text' required id='genre' 
                        placeholder='Genre de musique'
                        ref={genreInput}
                    ></input>
                
                    <label className={styles.label} htmlFor=''>Date</label>
                    <input 
                        className={styles.input} type='text' required id='date' 
                        placeholder='Date de sortie'
                        ref={dateInput}
                    ></input>
                
                    <button className={styles.button}>Add Album</button>
                
            </form>
        </div>
    )
}

export default NewAlbumForm