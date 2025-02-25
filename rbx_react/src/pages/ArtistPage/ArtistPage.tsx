import Navbar from "../../components/navbar/Navbar"
import data from "../../artists.json"
import { useParams } from "react-router-dom"

export default function ArtistPage() {
    const { _id } = useParams();
    console.log(_id)
    return (
        <>
            <Navbar />
            <p>page artiste</p>
            <p>{_id}</p>
            
        </>
        
    )
}