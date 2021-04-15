import './Footer.css';


const Footer = () => {
    return(


		<footer id="footer">

        <ul className="icons">
            <li><a href="https://twitter.com/"  target="_blank" rel="noreferrer" ><span className="fa fa-twitter"></span></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><span className="fa fa-facebook"></span></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span className="fa fa-instagram"></span></a></li>
            <li><a href="https://github.com/DoniZhelev/LandmarkList" target="_blank" rel="noreferrer" ><span className=" fa fa-github"></span></a></li>
            <li  className="copyright">      &copy; Landmarklist 2021</li>
        </ul>


    </footer>
    );
}
export default Footer;