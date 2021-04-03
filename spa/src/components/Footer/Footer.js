import {Link} from 'react-router-dom'


const Footer = () => {
    return(


		<footer id="footer">

        <ul className="icons">
            <li><a href="https://twitter.com/"  target="_blank" className="icon brands circle fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" className="icon brands circle fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" className="icon brands circle fa-instagram"><span className="label">Google+</span></a></li>
            <li><a href="https://github.com/DoniZhelev" target="_blank" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
            
        </ul>

        <ul className="copyright">
            <li>&copy; Landmarklist 2021</li>
        </ul>

    </footer>
    );
}
export default Footer;