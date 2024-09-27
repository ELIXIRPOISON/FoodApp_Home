import React from "react";
import styles from "./Header.module.css"

const Header = ()=>{
    return(
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <h2>GeekFood</h2>
                </div>
                <ul className={styles.center}>
                    <li className={styles.res}>Home</li>
                    <li>Quote</li>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
                <div className={styles.right}>
                    <button id="btn1">Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Header;