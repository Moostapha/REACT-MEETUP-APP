// logique map() dans ce component
import AlbumCard from "./AlbumCard"

function AlbumCardList(props) {
    // console.log(props)
    return(
        // props.newListAlbumArray.map() => albums is tne new object
        // built with each single album object
        props.albums.map(
            album => 
            <AlbumCard 
                key = {album.id}
                id = {album.id}
                artiste = {album.artiste}
                titre = {album.titre}
                date = {album.date}
                genre = {album.genre}
                image = {album.image}
            />
        )
    )
    
}

export default AlbumCardList // vers pages all albums