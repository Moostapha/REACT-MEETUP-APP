import NewAlbumForm from "../components/Album/NewAlbumForm"
import clientAxiosRequest from "../api/axiosConfig"

function NewAlbumPage() {
    
    function addAlbumHandler(albumData) {
        // axios request post on firebase db => albums.json for albums collection 
        clientAxiosRequest.post('albums.json', albumData)
        .then(response => {
            console.log('DATA ALBUM TO FIREBASE', response);
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