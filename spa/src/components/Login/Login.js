import {auth} from '../config/firebase'

import './Login.css'


const Login = ({
  history
}) => {

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password  = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) =>{
      history.push('/')
    });
    
  }

  
    return(
        <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={onLoginFormSubmitHandler}>
          <div className="user-box">
            <input type="text" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required=""  />
            <label>Password</label>
          </div>
         <input className="input-show" type="submit" value="submit"/>
        </form>
      </div>
    );
}

export default Login;
