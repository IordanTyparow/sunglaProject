import "./Footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <p>&copy; 2023 Your Website Name</p>
            <p>Designed by Iordan Typarow</p>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </footer>
    )
}