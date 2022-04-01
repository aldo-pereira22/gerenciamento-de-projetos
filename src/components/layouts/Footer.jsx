import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn} from'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (

        <footer className={styles.footer} >
            <ul className={styles.sociallist} >
                <li>
                    <FaFacebook />
                </li>

                <li>
                    <FaInstagram />
                </li>

                <li>
                    <FaLinkedinIn />
                </li>
            </ul>

            <p> <span className={styles.copyright} >Gerenciamento de Custos</span> &copy;2022 </p>
        </footer>
    )
}

export default Footer