import { Link } from  'react-router-dom';

const Header = () => {
    return(
<header id="header" class="alt">
<h1 id="logo"><a href="index.html">Twenty <span>by HTML5 UP</span></a></h1>
<nav id="nav">
    <ul>
        <li class="current"><a href="index.html">Welcome</a></li>
        <li class="submenu">
            <a href="#">Layouts</a>
            <ul>
                
                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                <li><a href="right-sidebar.html">Right Sidebar</a></li>
                <li><a href="no-sidebar.html">No Sidebar</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="submenu">
                    <a href="#">Submenu</a>
                    <ul>
                        <li><a href="#">Dolore Sed</a></li>
                        <li><a href="#">Consequat</a></li>
                        <li><a href="#">Lorem Magna</a></li>
                        <li><a href="#">Sed Magna</a></li>
                        <li><a href="#">Ipsum Nisl</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><Link to="/register" class="button primary">Register</Link></li>
        <li><Link to="/login" class="button primary">Login</Link></li>
    </ul>
</nav>
</header>
    );
}
export default Header;

