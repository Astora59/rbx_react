import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import data from "../../artists.json"

export default function Navbar() {
  const [showImages, setShowImages] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Données d'exemple des artistes (vous pouvez remplacer par un fetch API plus tard)
  const artists = data;
  const handleMenuClick = () => {
    setShowImages(!showImages); // Toggle pour afficher/masquer les images
  };

  const hideMenu = () => {
    setShowMenu(false);
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

      </div>
      <div className={classes.caseVide}></div>
      <div className={classes.caseLink}>
        <p>$</p>
      </div>

      
      
    </div>
  );
}
