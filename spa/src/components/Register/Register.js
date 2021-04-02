import { Link } from 'react-router-dom';
import * as userService from '../../services/userService'



const Register = () =>{

const onCreateUserHandler = (e) => {
  e.preventDefault();

  const {email,  password, repeatPassword} = e.target
  userService.create(email.value, password.value, repeatPassword.value)
  console.log(email.value);
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
           
              <input className="input-show" type="submit" value="Submit"/>
        
            </form>
          </div>
       
    );

}

export default Register;