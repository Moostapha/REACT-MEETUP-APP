// import de axios
import clientAxiosRequest from '../api/axiosConfig'

// import de useState pour gérer affichage (change ce qui est visible à l'écran selon conditions) + useEffect pour condition exécution requête axios
import { useState, useEffect } from 'react'

// component
import AlbumCardList from '../components/Album/AlbumCardList';

/* datas en dur 
    const DATA = [
    
    {
        id: 'a1',
        artiste: 'Duggy Tee' ,
        titre: 'FIT',
        date: 'coming soon',
        genre: 'Hip Hop rap soul reggae',
        image: 'https://www.afrisson.com/wp-content/uploads/2007/05/arton12754.jpg',
        
    },
    
    salam
    {
        id: 'a2',
        artiste: 'Duggy Tee' ,
        titre: 'FIT',
        date: 'coming soon',
        genre: 'Hip Hop rap soul reggae',
        image: 'https://i.discogs.com/-QtB2f3kGBMgdRoKDuIzhVgpGSBXjIp4F4JDwtRhu9M/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MjUw/MTYtMTQ1NTAzMTU2/MS0xNjU2LmpwZWc.jpeg',
    },
    
    degg la
    {
        id: 'a4',
        artiste: 'Duggy Tee' ,
        titre: 'FIT',
        date: 'coming soon',
        genre: 'Hip Hop rap soul reggae',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFkUAKkL7IBZz2iGoTpeKaq5Fkkxf6KV4Nw&usqp=CAU',
    }
];*/

function AllAlbumsPage() {
    
    // state affichage loading => état initial puis modif de cet état
    // useState => reload le component à chaque fois, donc all code dans la fonction est effectué à chaque fois
    const [isLoading, setIsLoading] = useState(true);
    
    // state affichage albums data de firebase => état initial puis modif de cet état
    const [loadedAlbums, setLoadedAlbums] = useState([]);
    
    
    // Requête axios effectuée once pour éviter infinite loops dans useEffect()
    useEffect( () => {
        
        setIsLoading(true)
        
        // requête GET to firebase to load datas album on this page
        clientAxiosRequest.get('albums.json')
        .then( response => {
            
            console.log('ALBUMS DATAS FROM FIREBASE', response.data);
            
            // traitement datas objet de firebase, 
            const albums = []; // helper
            
            for (const key in response.data) {
                
                // restructuration avec id array en objet
                const album = {
                    id: key,
                    ...response.data[key],
                }
                
                // console.log('ALBUMS DATAS FROM FIREBASE TRANSFORMED', album)
                // console.log(typeof(album))
                
                albums.push(album)
                // console.log('ALBUMS LIST DATAS FROM FIREBASE TRANSFORMED AND USABLE IN MAP() FROM CARDLIST COMPONENT', albums);
                
                // modif du state
                setLoadedAlbums(albums);
                setIsLoading(false)
            }
            
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    
    // rendu JSX conditionnel si loading
    if(isLoading) {
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }
    
    
    return(
        <section>
            <AlbumCardList albums= {loadedAlbums} />
            {/* DATAS EN DUR */}
            {/* <AlbumCardList albums= {DATA} /> */}
        </section>
        
    )
}

export default AllAlbumsPage