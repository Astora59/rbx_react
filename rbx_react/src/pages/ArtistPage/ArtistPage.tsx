import Navbar from "../../components/navbar/Navbar";
import data from "../../artists.json";
import { useParams } from "react-router-dom";
import classes from "./ArtistPage.module.scss";
import Carousel from "react-multi-carousel"; // ✅ Import du carousel
import "react-multi-carousel/lib/styles.css";
import close from "./../../assets/close.png"
import { useState } from "react";

export default function ArtistPage() {
    const { _id } = useParams();
    const artist = data.find(artist => artist._id.$oid === _id);

    // Configuration du carousel (doc officielle)
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={classes["container-artist-page"]}>
            <Navbar />

            {/* 🎥 Affichage de la vidéo si présente */}
            {artist?.vid ? (
                <div className={classes.videoContainer}>
                    <iframe
                        width="100%"
                        height="100vh"
                        src={artist.vid.replace("watch?v=", "embed/") + 
                            "?autoplay=1&mute=0&loop=1&controls=0&playlist=" + 
                            artist.vid.split("watch?v=")[1] + "&cc_load_policy=0"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                    />
                </div>
            ) : artist?.img ? (
                // 🖼 Affichage des images dans un carousel
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    className={classes.carouselContainer}
                >
                    {artist.img.map((image, index) => (
                        <div key={index} className={classes.imageWrapper}>
                            <img 
                                src={image} 
                                alt={`Artist Image ${index}`} 
                                className={classes.artistImage} 
                            />
                        </div>
                    ))}
                </Carousel>
            ) : null}
            <div className={classes.artistDescriptionContainer}>
                <p className={classes.artistDescription}>{artist?.description}</p>
                <p onClick={() => setIsOpen(!isOpen)} className={classes.artistDescriptionAbout}>ABOUT</p>
            </div>
            {isOpen && (
                    <div className={classes.aboutContainer}>
                        <img src={close} alt="croix fermeture" className={classes.closeButton} onClick={() => setIsOpen(!isOpen)}/>
                        <div className={classes.aboutContent}>
                            <div className={classes.aboutTitleContainer}>
                                <h3 className={classes.aboutTitle}>ABOUT</h3>
                            </div>
                            <p>RBX  a pour objectif de mettre la lumière sur les artistes de Roubaix et ses alentours, tout art confondu.<br></br> Design et build par @astora59<br></br> Inspiré grandement par Foreignrap.</p>
                        </div>
                        
                    </div>
                )}
        </div>
    );
}
