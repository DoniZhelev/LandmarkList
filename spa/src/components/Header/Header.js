import { Link } from  'react-router-dom';
import './Header.css'

const Header = ({
    email,
    isAuth
}) => {
    
    return(
<header id="header" className="alt">
    {isAuth
    ? <h1 id="logo"><Link to="/">WELCOME, {email}  </Link ></h1>
    : <h1 id="logo"><Link to="/">WELCOME, Guest  </Link ></h1>}

<nav id="nav">
    <ul>
        <li className="current"><Link to="index.html">About Us  </Link></li>
        <li className="submenu">
            {isAuth
            
            ? <Link to="/create">Create new Landmark</Link>
            : ''
        }
            <ul>
                
                
                <li className="submenu">
                 
                    <ul>
                       
                    </ul>
                </li>
            </ul>
        </li>
        {isAuth
        
        
        ? <li><Link to="/logout" className="button primary">Logout</Link></li>

        :  <li><Link to="/register" className="button primary">Register</Link></li>

        


        }
       {isAuth
       ? ''
       :  <li><Link to="/login" className="button primary">Login</Link></li>
       }
              
    </ul>
</nav>
</header>
    );
}
export default Header;

