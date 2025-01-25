import React, { useState } from "react";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  const [showImages, setShowImages] = useState(false);

  // Données d'exemple des artistes (vous pouvez remplacer par un fetch API plus tard)
  const artists = [
    { id: 1, name: "Artiste 1", image: "./assets/placeholder.png" },
    { id: 2, name: "Artiste 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Artiste 3", image: "https://via.placeholder.com/150" },
  ];

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
        {showImages && (
        <div className={classes.artistsGrid}>
          {artists.map((artist) => (
            <div key={artist.id} className={classes.artistCard}>
              <img src={artist.image} alt={artist.name} className={classes.artistImage} />
              <p className={classes.artistName}>{artist.name}</p>
            </div>
          ))}
        </div>
      )}
      </div>
      <div className={classes.caseVide}></div>
      <div className={classes.caseLink}>
        <p>Test nom</p>
      </div>

      
      
    </div>
  );
}