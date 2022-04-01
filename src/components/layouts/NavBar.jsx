import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'
import Container from "./Container"

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list} >
                    <li className={styles.item}>
                        <Link to="/" > <img src={logo} alt="" /></Link>

                    </li>

                    <li className={styles.item}>
                        <Link to="/" > Home </Link>

                    </li>
                    <li className={styles.item}  >

                        <Link to="/newprojects" > Projects </Link>

                    </li>

                    <li className={styles.item}>

                        <Link to="/company" > Empresa </Link>
                    </li>

                    <li className={styles.item}  >

                        <Link to="/contact" > Contato </Link>

                    </li>


                </ul>
            </Container>
        </nav>
    )
}

export default NavBar