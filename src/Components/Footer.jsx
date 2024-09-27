import styles from "./Footer.module.css"
import logo from "../assets/Logo.avif"

const Footer = ()=>{
    return(
        <>
           <div className={styles.container}>
            <img src={logo} alt="" className={styles.imageFooter} />
                <div className={styles.text}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique soluta aut vel perferendis animi, unde aliquam quas corrupti adipisci molestias?</p>
                </div>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
           </div>
        </>
    )
}

export default Footer ;