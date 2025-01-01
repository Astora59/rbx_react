import React from "react";
import classes from "./Navbar.module.scss";


export default function Navbar() {
    return (
        <div className={classes.container}>
            <div className={classes.menu}>
                <h1 className={classes.menuTitle}>MENU</h1>
                <p className={classes.menuDescription}>Cliquez ici pour découvrir d’autres artistes roubaisiens</p>
            </div>
            <div className={classes.caseVide}></div>
            <div className={classes.caseLink}>
                <p>Test nom</p>
            </div>
        </div>
    )
}