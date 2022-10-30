import { createContext, useState } from "react";

const FavoritesContext = createContext({
    // initial context value
    favorites: [],
    totalFavorites: 0,
    addFavorite : (favoriteAlbum) => {},
    removeFavorite : (albumId) => {},
    itemIsFavorite : (albumId) => {},
});


// component wrappé autour de App dans index.js pour accés du context à all components
export function FavoritesContextProvider(props) {

    // context data management with state
    const [userFavorites, setUserFavorites] = useState([]);

    // Functions changing state

    function addFavoriteHandler(favoriteAlbum) {
        setUserFavorites( (previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteAlbum)
        })
    };

    function removeFavoriteHandler(albumId) {
        setUserFavorites((previousUserFavorites) => {
            // filter() => filters out the album with the given albumID
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


    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

// export du context 
export default FavoritesContext;