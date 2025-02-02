import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import data from "../../artists.json"

export default function Navbar() {
  const [showImages, setShowImages] = useState(false);
  

  // Données d'exemple des artistes (vous pouvez remplacer par un fetch API plus tard)
  const artists = data;
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
            <div key={artist.name} className={classes.artistCard}>
              <img
                src={artist.thumbnail}
                alt={artist.name}
                className={classes.artistImage}
              />
              <p className={classes.artistName}>{artist.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
        {showImages && (<img src="./src/assets/close.png" alt="croix fermeture" onClick={handleMenuClick} className={classes.closeButton}/>)}
      </div>
      <div className={classes.caseVide}></div>
      <div className={classes.caseLink}>
        <p>$</p>
      </div>

      
      
    </div>
  );
}
