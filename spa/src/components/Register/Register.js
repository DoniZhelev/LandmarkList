import { auth } from '../config/firebase';

import './Register.css'

const Register = ({
  history
}) =>{

const onCreateUserHandler = (e) => {
  e.preventDefault();

  const {email,  password, repeatPassword} = e.target
  if(password.value === repeatPassword.value) {
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(userCredential => {
      console.log('Register');
      history.push('/')
    })
  } else {
  console.error('Invalid Password');
  }
 
};

return(
        <div className="login-box">
            <h2>Register</h2>
            <form onSubmit={onCreateUserHandler}>
            <div className="user-box">
                <input type="text" name="email" required=""/>
                <label>Email</label>
              </div>
           
              <div className="user-box">
                <input type="password" name="password" required=""/>
                <label>Password</label>
              </div>
              <div className="user-box">
                <input type="password" name="repeatPassword" required=""/>
                <label> Repeat Password</label>
              </div>
           
              <input className="input-show" type="submit" value="submit"/>
        
            </form>
          </div>
       
    );

}

export default Register;