import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import data from "../../artists.json"
import { Link, useParams } from "react-router-dom";
import close from "./../../assets/close.png"
import arrow from "./../../assets/Vector.png"


export default function Navbar() {
  // State pour afficher/masquer les images
  const [showImages, setShowImages] = useState(false);
  
  

  // Données des artistes (API plus tard)
  const artists = data;
  const { _id } = useParams();
  const artist = data.find(artist => artist._id.$oid === _id);
  const handleMenuClick = () => {
    setShowImages(!showImages); // Toggle pour afficher/masquer les images
    
  };

  

  return (
    <div className={classes.container}>
      <div className={classes.menu} onClick={handleMenuClick}>
        <h1 className={classes.menuTitle}>MENU</h1>
        <p className={classes.menuDescription}>
          Cliquez ici pour découvrir d’autres artistes roubaisiens
        </p>
        {/* Affichage conditionnel des images */}
        <div
          className={`${classes.artistsGrid} ${
            showImages ? classes.show : classes.hide
          }`}
        >
          {artists.map((artist) => (
            <Link to={`/artist/${artist._id.$oid}`} key={artist.name} className={classes.artistLink}>
            <div key={artist.name} className={classes.artistCard}>
              <img
                src={artist.thumbnail}
                alt={artist.name}
                className={classes.artistImage}
              />
              <p className={classes.artistName}>{artist.name.toUpperCase()}</p>
            </div>
            </Link>
          ))}
        </div>
        {showImages && (<img src={close} alt="croix fermeture" onClick={handleMenuClick} className={classes.closeButton}/>)}
      </div>
      <div className={classes.caseVide}></div>
      <a href={artist?.contact} className={classes.linktoArtistPage}>
      <div className={classes.caseLink}>
          <h2 className={classes.artistNameEmptyCase}>{artist?.name.toUpperCase()}</h2>
          <img src={arrow} alt="flèche mène vers lien" className={classes.arrow}/>
        </div>
        
        
      </a>
      

      
      
    </div>
  );
}
