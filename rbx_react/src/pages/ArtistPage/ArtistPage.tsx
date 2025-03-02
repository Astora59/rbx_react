import Navbar from "../../components/navbar/Navbar"
import data from "../../artists.json"
import { useParams } from "react-router-dom"
import classes from "./ArtistPage.module.scss"
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";


export default function ArtistPage() {
    const { _id } = useParams();
    const artist = data.find(artist => artist._id.$oid === _id);
    const handleDragStart = (e) => e.preventDefault();

    const items = artist?.img?.map((src, index) => (
        <img key={index} src={src} onDragStart={handleDragStart} role="presentation" className={classes.carouselImg} />
    )) || [];

    return (
        <div className={classes["container-artist-page"]}>
            <Navbar />
            <p className={classes.artistDescription}>{artist?.description}</p>
             
             
            
        </div>
        
    )
}