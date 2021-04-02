import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="email" required=""/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required=""/>
            <label>Password</label>
          </div>
         <input className="input-show" type="submit" value="submit"/>
        </form>
      </div>
    );
}

export default Login;