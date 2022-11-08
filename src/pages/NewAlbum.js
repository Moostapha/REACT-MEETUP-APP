import NewAlbumForm from "../components/Album/NewAlbumForm"
import clientAxiosRequest from "../api/axiosConfig"

function NewAlbumPage() {
    
    function addAlbumHandler(albumData) {
        
        // UI confirmation
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Ajouter cet album ?'))
        
        // axios request post on firebase db => albums.json for albums collection 
        clientAxiosRequest.post('albums.json', albumData)
        .then(response => {
            console.log('DATA ALBUM TO FIREBASE', response);
            alert('Album rajouté avec succés !!!')
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return(
        <main>
            <NewAlbumForm onAddAlbum={addAlbumHandler} />
        </main>
    )
}

export default NewAlbumPage