import { Link } from  'react-router-dom';

const Header = () => {
    return(
<header id="header" className="alt">
<h1 id="logo"><Link to="/">WELCOME,  </Link ></h1>
<nav id="nav">
    <ul>
        <li className="current"><Link to="index.html">About Us  </Link></li>
        <li className="submenu">
            <Link to="#">Category</Link>
            <ul>
                
                <li><Link to="left-sidebar.html">Left Sidebar</Link></li>
                <li><Link to="right-sidebar.html">Right Sidebar</Link></li>
                <li><Link to="no-sidebar.html">No Sidebar</Link></li>
                <li><Link to="contact.html">Contact</Link></li>
                <li className="submenu">
                    <Link to="#">Submenu</Link>
                    <ul>
                        <li><Link to="#">Dolore Sed</Link></li>
                        <li><Link to="#">Consequat</Link></li>
                        <li><Link to="#">Lorem Magna</Link></li>
                        <li><Link to="#">Sed Magna</Link></li>
                        <li><Link to="#">Ipsum Nisl</Link></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><Link to="/register" className="button primary">Register</Link></li>
        <li><Link to="/login" className="button primary">Login</Link></li>
    </ul>
</nav>
</header>
    );
}
export default Header;

