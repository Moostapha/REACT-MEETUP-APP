import { createContext, useState } from "react";
import clientAxiosRequest from "../api/axiosConfig";

const FavoritesContext = createContext({
    // initial context value
    favorites: [],
    totalFavorites: 0,
    addFavorite : (favoriteAlbum) => {},
    removeFavorite : (albumId) => {},
    itemIsFavorite : (albumId) => {},
});


// component wrappé autour de App dans index.js pour accés du context à all components intéressés par les valeurs de state modifié
export function FavoritesContextProvider(props) {
    
    // context data management with state
    const [userFavorites, setUserFavorites] = useState([]);
    
    // Functions changing state
    
    function addFavoriteHandler(favoriteAlbum) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(('Ajouter cet album à vos favoris ?')))
        
        // axios post to firebase
        clientAxiosRequest.post('favoris.json', favoriteAlbum)
        .then(response => {
            console.log('DATA ALBUM TO FIREBASE', response);
            console.log('KEYS: ', response.data.name);
            alert('Album rajouté dans vos favoris avec succés !!!')
        })
        .catch((error) => {
            console.log(error)
        })
        
        setUserFavorites( (previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteAlbum)
        })
    };
    
    function removeFavoriteHandler(albumId) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(('Voulez-vous vraiment supprimé cet album de vos favoris ?')))
        
        // axios delete request to firebase
        // 'favoris/' + albumId +'.json'
        clientAxiosRequest.delete('favoris/' + albumId + '.json', 
            {params: {id:albumId}} 
            
        )
        .then(response => {
            // const primaryKeyDb = response.data.name
            console.log('DATA FAVORITE ALBUM DELETED FROM FIREBASE', response);
            alert('Album supprimé de vos favoris avec succés !!!')
        })
        .catch((error) => {
            console.log(error)
        })
        
        setUserFavorites((previousUserFavorites) => {
            // filter() => filters out the album with the given albumID and returns a new array without the given ID
            return previousUserFavorites.filter(
                album => album.id !== albumId
            )
        })
    };
    
    function itemIsFavoriteHandler(albumId) {
        // some() checks if one of the item matches the condition
        return userFavorites.some(
            album => album.id === albumId
        )
    };
    
    // Final context updated => object context holding the latest value
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        // functions pointers exposed to all components
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    
    // component that will be wrapped globally in index.js so all component in the app have access to the context
    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

// export du context pour usage global dans toute l'app via index.js
export default FavoritesContext;